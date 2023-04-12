'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../_utils');

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

      return getObjectSchemaAbsentOptionsNames({
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
        return getObjectSchemaAbsentOptionsNames({
          ruleName: myRuleEntry.name,
          myOptions: myRuleEntry.config[0],
          refOptions: objectOneOfSchemas[0].value.properties,
        });
      }

      // TODO: check is there more than one object variant
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

      return getObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
        myOptions: myRuleOptions,
        refOptions: secondElementSchema.value.properties,
      });
    }
  }

  loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
};
