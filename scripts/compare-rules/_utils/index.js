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
  CONST: 'const',
  ENUM: 'enum',

  ALL_OF: 'allOf',
  ANY_OF: 'anyOf',
  ONE_OF: 'oneOf',
  NOT: 'not',
  IF_THEN_ELSE: 'if/then/else',

  ARRAY: 'array',
  OBJECT: 'object',

  UNKNOWN: 'unknown',
};
module.exports.SCHEMA_TYPE = SCHEMA_TYPE;
module.exports.SCHEMA_TYPES = Object.values(SCHEMA_TYPE);

module.exports.getSchemaType = (schema) => {
  if (schema.const) return SCHEMA_TYPE.CONST;
  if (schema.enum) return SCHEMA_TYPE.ENUM;
  if (schema.allOf) return SCHEMA_TYPE.ALL_OF;
  if (schema.anyOf) return SCHEMA_TYPE.ANY_OF;
  if (schema.oneOf) return SCHEMA_TYPE.ONE_OF;
  if (schema.not) return SCHEMA_TYPE.NOT;
  if (schema.if) return SCHEMA_TYPE.IF_THEN_ELSE;
  if (schema.type === 'object' || schema.properties) return SCHEMA_TYPE.OBJECT;
  if (schema.type === 'array') return SCHEMA_TYPE.ARRAY;
  return SCHEMA_TYPE.UNKNOWN;
};
