'use strict';

const { enabledRules: enabledBabelRules } = require('../partials/babel');
const { babelResetRules: babelResetMainRules } = require('../partials/main');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
  },
  rules: {
    ...babelResetMainRules,
    ...enabledBabelRules,
  },
};
