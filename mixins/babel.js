'use strict';

const { enabledRules } = require('../partials/babel');
const { babelResetRules } = require('../partials/main');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
  },
  rules: {
    ...babelResetRules,
    ...enabledRules,
  },
};
