'use strict';

const { enabledRules: enabledBabelRules } = require('../partials/babel');
const { babelResetRules: babelResetMainRules } = require('../partials/core');

module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    ...babelResetMainRules,
    ...enabledBabelRules,
  },
};
