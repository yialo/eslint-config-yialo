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
  const myRuleName = myRuleEntry.name;
  const { items } = arrayTypedSchema.value;

  if (items.anyOf) {
    console.log(
      loggerUtil.colorize.yellow(
        myRuleName,
        ': anyOf :',
        loggerUtil.stringifyMultiline(items.anyOf),
      ),
    );
    return {};
  }

  if (items.oneOf) {
    /* TODO:
    - detect if there are object variants
     */

    const oneOfSchemas = items.oneOf.map(
      (oneOfRaw) => new TypedSchema(oneOfRaw),
    );

    for (const oneOfSchema of oneOfSchemas) {
      if (oneOfSchema.type === SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `rule: ${myRuleName}, unknown type detected in oneOf element ${loggerUtil.stringifyMultiline(
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

    console.log(loggerUtil.colorize.cyan(myRuleName, oneOfSchemas));

    return {};
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
