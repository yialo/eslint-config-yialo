'use strict';

const {
  findObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../lib');

const MAX_SCHEMA_LENGTH = 2;

module.exports.getAbsentPropsFromTupleTopLevelSchema = (
  tupleSchema,
  myRuleEntry,
) => {
  if (tupleSchema.length === 0) {
    if (myRuleEntry.configuredAsArray) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleEntry.name} should be configured as severity string`,
      );
    }
    return null;
  }

  if (tupleSchema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(
      `Unexpectedly long tuple schema for: ${myRuleEntry.name}`,
    );
    return null;
  }

  if (tupleSchema.length === 1) {
    const schema = new TypedSchema(tupleSchema[0]);

    if (schema.type === SCHEMA_TYPE.UNKNOWN) {
      loggerUtil.logAndThrow(
        `Unknows tuple element schema type for: ${myRuleEntry.name} - ${schema.type}`,
      );
      return null;
    }

    if (schema.type === SCHEMA_TYPE.ENUM) {
      if (!Object.hasOwn(myRuleEntry.config, 0)) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleEntry.name} should be configured as array with non-empty second element`,
          loggerUtil.colorize.brightGreen,
        );
      }
      return null;
    }

    if (schema.type === SCHEMA_TYPE.OBJECT) {
      if (!isObject(myRuleEntry.config[0])) {
        loggerUtil.logAndThrow(
          `Options config of rule ${myRuleEntry.name} should be object`,
          loggerUtil.colorize.brightMagenta,
        );
        return null;
      }

      return findObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
        myOptions: myRuleEntry.config[0],
        refOptions: schema.value.properties,
      });
    }

    if (schema.type === SCHEMA_TYPE.ONE_OF) {
      const oneOfSchemas = schema.value.oneOf.map(
        (oneOfRaw) => new TypedSchema(oneOfRaw),
      );

      const objectOneOfSchemas = oneOfSchemas.filter(
        ({ type }) => type === SCHEMA_TYPE.OBJECT,
      );

      if (objectOneOfSchemas.length > 0) {
        if (!isObject(myRuleEntry.config[0])) {
          loggerUtil.logAndThrow(
            `Options config of rule ${myRuleEntry.name} should be object`,
            loggerUtil.colorize.brightMagenta,
          );
          return null;
        }
      }

      if (objectOneOfSchemas.length === 1) {
        return findObjectSchemaAbsentOptionsNames({
          ruleName: myRuleEntry.name,
          myOptions: myRuleEntry.config[0],
          refOptions: objectOneOfSchemas[0].value.properties,
        });
      }

      if (objectOneOfSchemas.length === 2) {
        const commonOptionPropNames = (() => {
          const propNames = [];

          const firstSchemaOptionPropNames = Object.keys(
            objectOneOfSchemas[0].value.properties,
          );
          const secondSchemaOptionPropNames = Object.keys(
            objectOneOfSchemas[1].value.properties,
          );

          for (const propName of firstSchemaOptionPropNames) {
            if (secondSchemaOptionPropNames.includes(propName)) {
              propNames.push(propName);
            }
          }

          return propNames;
        })();

        const commonEnumOptionPropNames = commonOptionPropNames.filter(
          (propName) => {
            return objectOneOfSchemas.every(
              (oneOfSchema) => !!oneOfSchema.value.properties[propName].enum,
            );
          },
        );

        if (commonEnumOptionPropNames.length !== 1) {
          loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
          return null;
        }

        const commonEnumOptionName = commonEnumOptionPropNames[0];
        const myEnumValue = myRuleEntry.config[0][commonEnumOptionName];

        const matchedOneOfSchemasByCommonEnumValue = objectOneOfSchemas.filter(
          ({ value }) => {
            return value.properties[commonEnumOptionName].enum.includes(
              myEnumValue,
            );
          },
        );

        if (matchedOneOfSchemasByCommonEnumValue.length !== 1) {
          loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
          return null;
        }

        return findObjectSchemaAbsentOptionsNames({
          ruleName: myRuleEntry.name,
          myOptions: myRuleEntry.config[0],
          refOptions: matchedOneOfSchemasByCommonEnumValue[0].value.properties,
        });
      }
    }
  }

  if (tupleSchema.length === 2) {
    const [firstElementSchema, secondElementSchema] = tupleSchema.map(
      (elementSchemaRaw) => new TypedSchema(elementSchemaRaw),
    );

    if (firstElementSchema.type === SCHEMA_TYPE.ENUM) {
      if (!Object.hasOwn(myRuleEntry.config, 0)) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleEntry.name} should be configured as array with non-empty second element`,
          loggerUtil.colorize.brightGreen,
        );
        return null;
      }
    }

    if (secondElementSchema.type === SCHEMA_TYPE.ENUM) {
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return null;
    }

    if (secondElementSchema.type === SCHEMA_TYPE.OBJECT) {
      const myRuleOptions = myRuleEntry.config[1];

      if (!isObject(myRuleOptions)) {
        loggerUtil.logAndThrow(
          `Options config of rule ${myRuleEntry.name} should be object`,
          loggerUtil.colorize.brightMagenta,
        );
        return null;
      }

      return findObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
        myOptions: myRuleOptions,
        refOptions: secondElementSchema.value.properties,
      });
    }
  }

  loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
};
