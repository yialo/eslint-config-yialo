'use strict';

const { isObject } = require('../shared');

const TOP_LEVEL_SCHEMA_TYPE = {
  TUPLE: 'tuple',
  RECORD: 'record',
  UNKNOWN: 'unknown',
};

const getTopLevelSchemaType = (topLevelSchema) => {
  if (Array.isArray(topLevelSchema)) return TOP_LEVEL_SCHEMA_TYPE.TUPLE;
  if (isObject(topLevelSchema)) return TOP_LEVEL_SCHEMA_TYPE.RECORD;
  return TOP_LEVEL_SCHEMA_TYPE.UNKNOWN;
};

Object.assign(module.exports, {
  TOP_LEVEL_SCHEMA_TYPE,
  getTopLevelSchemaType,
});
