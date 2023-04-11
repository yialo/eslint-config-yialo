'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../_utils');

module.exports.getAbsentPropsFromTupleRuleSchema = (
  tupleSchema,
  myRuleEntry,
) => {
  const myRuleName = myRuleEntry.name;

  if (tupleSchema.length === 0) {
    if (myRuleEntry.configuredAsArray) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as severity string`,
      );
    }

    return null;
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
