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
    console.log(
      loggerUtil.colorize.yellow(
        myRuleEntry.name,
        ': anyOf :',
        loggerUtil.stringifyMultiline(items.anyOf),
      ),
    );
    return {};
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
