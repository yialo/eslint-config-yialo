'use strict';

const { babelRules } = require('../partials/babel');
const { coreRules_extensibleWithBabel_full_OFF } = require('../partials/core');

module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    ...coreRules_extensibleWithBabel_full_OFF,
    ...babelRules,
  },
};
