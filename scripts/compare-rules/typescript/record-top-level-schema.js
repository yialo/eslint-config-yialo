'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../_utils');

module.exports.getAbsentPropsFromRecordTopLevelSchema = (
  recordSchema,
  myRuleEntry,
) => {
  const myRuleName = myRuleEntry.name;

  console.log('RECORD');

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
