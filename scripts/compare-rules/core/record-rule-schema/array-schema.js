'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../../_utils');

/**
 * @param {TypedSchema} arraySchemaTyped
 * @param {import('../../_utils').MyRuleEntryNormalized} myRuleEntry
 */
module.exports.getAbsentPropsFromArraySchema = (
  arrayTypedSchema,
  myRuleEntry,
) => {
  const { items } = arrayTypedSchema.value;

  if (items.anyOf) {
    const anyOfSchemas = items.anyOf.map(
      (anyOfRaw) => new TypedSchema(anyOfRaw),
    );

    for (const anyOfSchema of anyOfSchemas) {
      if (anyOfSchema.type === SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `rule: ${
            myRuleEntry.name
          }, unknown type detected in anyOf element ${loggerUtil.stringifyMultiline(
            anyOfSchema.value,
          )}`,
          loggerUtil.colorize.brightRed,
        );
        return {};
      }
    }

    const objectAnyOfSchemas = anyOfSchemas.filter(
      (anyOf) => anyOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectAnyOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return {};
    }

    const hasNonObjectConfigElements = myRuleEntry.config.some(
      (configElement) => !isObject(configElement),
    );

    if (hasNonObjectConfigElements) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleEntry.name}: all config elements should be objects`,
      );
      return {};
    }

    if (objectAnyOfSchemas.length === 1) {
      for (const myConfigElement of myRuleEntry.config) {
        const absentOptionNames = getObjectSchemaAbsentOptionsNames({
          ruleName: myRuleEntry.name,
          myOptions: myConfigElement,
          refOptions: objectAnyOfSchemas[0].value.properties,
        });

        if (Object.keys(absentOptionNames).length > 0) {
          loggerUtil.logAndThrow(
            `Rule ${myRuleEntry.name}: config element ${JSON.stringify(
              myConfigElement,
            )} has missing option names: ${
              absentOptionNames[myRuleEntry.name]
            }`,
          );
          return {};
        }
      }

      return {};
    }

    if (objectAnyOfSchemas.length === 2) {
      const firstSchemaOptions = Object.entries(
        objectAnyOfSchemas[0].value.properties,
      );

      const everyFirstSchemaOptionIsString = firstSchemaOptions.every(
        ([_, option]) => option.type === 'string',
      );

      if (!everyFirstSchemaOptionIsString) {
        loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
        return {};
      }

      const secondSchemaOptions = Object.entries(
        objectAnyOfSchemas[1].value.properties,
      );

      const everySecondSchemaOptionIsString = secondSchemaOptions.every(
        ([_, option]) => option.type === 'string',
      );

      if (!everySecondSchemaOptionIsString) {
        loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
        return {};
      }

      const propertiesAreTheSame = (() => {
        for (let i = 0; i < firstSchemaOptions.length; i++) {
          const firstOptionsElement = firstSchemaOptions[i];
          const secondOptionsContainTheSameElement = !!secondSchemaOptions.find(
            (option) => {
              return option[0] === firstOptionsElement[0];
            },
          );
          if (!secondOptionsContainTheSameElement) {
            return false;
          }
        }
        return true;
      })();

      if (!propertiesAreTheSame) {
        loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
        return {};
      }

      const commonOptions = (() => {
        const requiredInFirstSchema = objectAnyOfSchemas[0].value.required;

        const requiredInSecondSchema = objectAnyOfSchemas[1].value.required;

        if (!requiredInFirstSchema && !requiredInSecondSchema) {
          return objectAnyOfSchemas[0].value.properties;
        }

        return Object.fromEntries(
          Object.entries(objectAnyOfSchemas[0].value.properties).filter(
            ([optionName]) =>
              !requiredInFirstSchema.includes(optionName) &&
              !requiredInSecondSchema.includes(optionName),
          ),
        );
      })();

      for (const myConfigElement of myRuleEntry.config) {
        const absentOptionNames = getObjectSchemaAbsentOptionsNames({
          ruleName: myRuleEntry.name,
          myOptions: myConfigElement,
          refOptions: commonOptions,
        });

        if (Object.keys(absentOptionNames).length > 0) {
          loggerUtil.logAndThrow(
            `Rule ${myRuleEntry.name}: config element ${JSON.stringify(
              myConfigElement,
            )} has missing option names: ${
              absentOptionNames[myRuleEntry.name]
            }`,
          );
          return {};
        }
      }

      return {};
    }
  }

  if (items.oneOf) {
    const oneOfSchemas = items.oneOf.map(
      (oneOfRaw) => new TypedSchema(oneOfRaw),
    );

    for (const oneOfSchema of oneOfSchemas) {
      if (oneOfSchema.type === SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `rule: ${
            myRuleEntry.name
          }, unknown type detected in oneOf element ${loggerUtil.stringifyMultiline(
            oneOfSchema.value,
          )}`,
          loggerUtil.colorize.brightRed,
        );
        return {};
      }
    }

    const objectOneOfSchemas = oneOfSchemas.filter(
      (oneOf) => oneOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectOneOfSchemas.length !== 1) {
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return {};
    }

    const hasNonObjectConfigElements = myRuleEntry.config.some(
      (configElement) => !isObject(configElement),
    );

    if (hasNonObjectConfigElements) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleEntry.name}: all config elements should be objects`,
      );
      return {};
    }

    for (const myConfigElement of myRuleEntry.config) {
      const absentOptionNames = getObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
        myOptions: myConfigElement,
        refOptions: objectOneOfSchemas[0].value.properties,
      });

      if (Object.keys(absentOptionNames).length > 0) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleEntry.name}: config element ${JSON.stringify(
            myConfigElement,
          )} has missing option names: ${absentOptionNames[myRuleEntry.name]}`,
        );
        return {};
      }
    }

    return {};
  }

  loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
};
