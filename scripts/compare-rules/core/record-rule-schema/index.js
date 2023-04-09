'use strict';

const { getAbsentPropsFromAnyOfSchema } = require('./any-of-schema');
const { getAbsentPropsFromArraySchema } = require('./array-schema');

Object.assign(module.exports, {
  getAbsentPropsFromAnyOfSchema,
  getAbsentPropsFromArraySchema,
});
