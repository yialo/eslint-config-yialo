'use strict';

const { loggerUtil, SCHEMA_TYPE, TypedSchema } = require('../../_utils');
const { getAbsentPropsFromAnyOfSchema } = require('./any-of-schema');
const { getAbsentPropsFromArraySchema } = require('./array-schema');

module.exports.getAbsentPropsFromRecordTopLevelSchema = (
  recordTopLevelSchema,
  myRuleEntry,
) => {
  const myRuleName = myRuleEntry.name;
  const typedSchema = new TypedSchema(recordTopLevelSchema);

  if (typedSchema.type === SCHEMA_TYPE.EMPTY) {
    return null;
  }

  if (typedSchema.type === SCHEMA_TYPE.ANY_OF) {
    return getAbsentPropsFromAnyOfSchema(typedSchema, myRuleEntry);
  }

  if (typedSchema.type === SCHEMA_TYPE.ARRAY) {
    return getAbsentPropsFromArraySchema(typedSchema, myRuleEntry);
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
