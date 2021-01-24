'use strict';

const { babelRules } = require('../partials/babel');
const { babelExtensibleCoreRulesReset } = require('../partials/core');

module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    ...babelExtensibleCoreRulesReset,
    ...babelRules,
  },
};
