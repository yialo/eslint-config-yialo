'use strict';

const colors = require('colors');

const THROW_ON_UNEXPECTED = false;

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.throwRuleConfigError = (myRuleName) => {
  const message = `Unexpectedly configured rule: ${myRuleName}`;
  console.log(colors.red(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};

module.exports.throwUnhandledSchemaError = (myRuleName) => {
  const message = `Unhandled schema for rule: ${myRuleName}`;
  console.log(colors.red(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};

const RULE_SCHEMA_TYPE = {
  ARRAY: 'array',
  OBJECT: 'object',
  UNKNOWN: 'unknown',
};
module.exports.RULE_SCHEMA_TYPE = RULE_SCHEMA_TYPE;

module.exports.getRuleSchemaType = (ruleSchema) => {
  if (Array.isArray(ruleSchema)) return RULE_SCHEMA_TYPE.ARRAY;
  if (isObject(ruleSchema)) return RULE_SCHEMA_TYPE.OBJECT;
  return RULE_SCHEMA_TYPE.UNKNOWN;
};

const SCHEMA_TYPE = {
  ARRAY: 'array',
  ENUM: 'enum',
  OBJECT: 'object',
  UNKNOWN: 'unknown',
};
module.exports.SCHEMA_TYPE = SCHEMA_TYPE;

module.exports.getSchemaType = (schema) => {
  if (schema.enum) {
    return SCHEMA_TYPE.ENUM;
  }

  if (schema.type) {
    return schema.type;
  }

  return SCHEMA_TYPE.UNKNOWN;
};
