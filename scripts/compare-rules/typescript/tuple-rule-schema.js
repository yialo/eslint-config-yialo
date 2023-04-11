'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../_utils');

const MAX_SCHEMA_LENGTH = 1;

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

  if (tupleSchema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(`Unexpectedly long tuple schema for: ${myRuleName}`);
    return null;
  }

  const schema = new TypedSchema(tupleSchema[0]);

  if (schema.type === SCHEMA_TYPE.UNKNOWN) {
    loggerUtil.logAndThrow(
      `Unknows tuple element schema type for: ${myRuleName} - ${schema.type}`,
    );
    return null;
  }

  if (schema.type === SCHEMA_TYPE.ENUM) {
    if (!Object.hasOwn(myRuleEntry.config, 0)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as array with non-empty second element`,
        loggerUtil.colorize.brightGreen,
      );
    }
    return null;
  }

  if (schema.type === SCHEMA_TYPE.OBJECT) {
    if (!isObject(myRuleEntry.config[0])) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleName} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
      return null;
    }

    return getObjectSchemaAbsentOptionsNames({
      ruleName: myRuleName,
      myOptions: myRuleEntry.config[0],
      refOptions: schema.value.properties,
    });
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
