'use strict';

const { isObject } = require('../_utils');

module.exports.getOptionNamesFromSchemaElement = (schemaElement) => {
  if (!isObject(schemaElement)) return [];
  if (schemaElement.type !== 'object') return [];
  return Object.keys(schemaElement.properties);
};
