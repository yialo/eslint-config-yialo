'use strict';

const loggerUtil = require('./logger');

module.exports.loggerUtil = loggerUtil;

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

const RULE_SCHEMA_TYPE = {
  LIST: 'list',
  RECORD: 'record',
  UNKNOWN: 'unknown',
};
module.exports.RULE_SCHEMA_TYPE = RULE_SCHEMA_TYPE;

module.exports.getRuleSchemaType = (ruleSchema) => {
  if (Array.isArray(ruleSchema)) return RULE_SCHEMA_TYPE.LIST;
  if (isObject(ruleSchema)) return RULE_SCHEMA_TYPE.RECORD;
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

  NUMBER: 'number',
  ARRAY: 'array',
  OBJECT: 'object',

  ABSENT: 'absent',
  EMPTY: 'empty',
  UNKNOWN: 'unknown',
};
module.exports.SCHEMA_TYPE = SCHEMA_TYPE;
module.exports.SCHEMA_TYPES = Object.values(SCHEMA_TYPE);

const getSchemaType = (schema) => {
  if (!schema) return SCHEMA_TYPE.ABSENT;
  if (Object.keys(schema).length === 0) return SCHEMA_TYPE.EMPTY;
  if (schema.const) return SCHEMA_TYPE.CONST;
  if (schema.enum) return SCHEMA_TYPE.ENUM;
  if (schema.allOf) return SCHEMA_TYPE.ALL_OF;
  if (schema.anyOf) return SCHEMA_TYPE.ANY_OF;
  if (schema.oneOf) return SCHEMA_TYPE.ONE_OF;
  if (schema.not) return SCHEMA_TYPE.NOT;
  if (schema.if) return SCHEMA_TYPE.IF_THEN_ELSE;
  if (schema.type === 'object' || schema.properties) return SCHEMA_TYPE.OBJECT;
  if (schema.type === 'integer') return SCHEMA_TYPE.NUMBER;
  if (schema.type === 'array') return SCHEMA_TYPE.ARRAY;
  return SCHEMA_TYPE.UNKNOWN;
};

module.exports.SchemaTyped = class {
  constructor(schema) {
    this.type = getSchemaType(schema);
    this.value = schema;
  }
};

module.exports.MyRuleEntryNormalized = class {
  constructor([myRuleName, myRuleConfigRaw]) {
    const configIsArray = Array.isArray(myRuleConfigRaw);

    this.name = myRuleName;
    this.severity = configIsArray ? myRuleConfigRaw[0] : myRuleConfigRaw;
    this.config = configIsArray ? myRuleConfigRaw.slice(1) : [];
    this.configuredAsArray = configIsArray;
  }
};

module.exports.RULE_SEVERITY = {
  OFF: {
    number: 0,
    string: 'off',
  },
  WARN: {
    number: 1,
    string: 'warn',
  },
  ERROR: {
    number: 2,
    string: 'error',
  },
};

module.exports.getObjectSchemaAbsentOptionsNames = ({
  ruleName,
  myOptions,
  refOptions,
  forSecondOptionObject = false,
}) => {
  const myOptionNames = Object.keys(myOptions);
  const schemaOptionNames = Object.keys(refOptions);
  const absentOptions = schemaOptionNames.filter(
    (refOptName) => !myOptionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  if (forSecondOptionObject) {
    return {
      [`${ruleName}, second option object`]: absentOptions,
    };
  }

  return { [ruleName]: absentOptions };
};
