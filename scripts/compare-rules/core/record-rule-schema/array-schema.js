'use strict';

const {
  isObject,
  getObjectSchemaAbsentOptionsNames,
  loggerUtil,
  SchemaTyped,
  SCHEMA_TYPE,
} = require('../../_utils');

module.exports.getAbsentPropsFromArraySchema = (
  arraySchemaTyped,
  myRuleEntry,
) => {
  const myRuleName = myRuleEntry.name;
  const { items } = arraySchemaTyped.value;

  if (items.anyOf) {
    console.log(
      loggerUtil.colorize.yellow(myRuleName, ': anyOf :', items.anyOf),
    );
    return {};
  }

  if (items.oneOf) {
    console.log(loggerUtil.colorize.cyan(myRuleName, ': oneOf :', items.oneOf));
    return {};
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
