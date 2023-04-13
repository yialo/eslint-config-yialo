'use strict';

const { SCHEMA_TYPE } = require('./config');

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
  if (schema.type === 'string') return SCHEMA_TYPE.STRING;
  if (schema.type === 'integer') return SCHEMA_TYPE.NUMBER;
  if (schema.type === 'array') return SCHEMA_TYPE.ARRAY;
  return SCHEMA_TYPE.UNKNOWN;
};

module.exports.TypedSchema = class {
  constructor(schema) {
    this.type = getSchemaType(schema);
    this.value = schema;
  }
};
