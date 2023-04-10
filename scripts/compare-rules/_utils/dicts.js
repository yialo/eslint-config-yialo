'use strict';

module.exports.RULE_SCHEMA_TYPE = {
  TUPLE: 'tuple',
  RECORD: 'record',
  UNKNOWN: 'unknown',
};

module.exports.SCHEMA_TYPE = {
  CONST: 'const',
  ENUM: 'enum',

  ALL_OF: 'allOf',
  ANY_OF: 'anyOf',
  ONE_OF: 'oneOf',
  NOT: 'not',
  IF_THEN_ELSE: 'if/then/else',

  NUMBER: 'number',
  STRING: 'string',
  ARRAY: 'array',
  OBJECT: 'object',

  ABSENT: 'absent',
  EMPTY: 'empty',
  UNKNOWN: 'unknown',
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
