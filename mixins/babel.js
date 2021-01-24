'use strict';

const { enabledRules: enabledBabelRules } = require('../partials/babel');
const { babelExtensibleCoreRulesReset } = require('../partials/core');

module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    ...babelExtensibleCoreRulesReset,
    ...enabledBabelRules,
  },
};
