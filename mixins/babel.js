'use strict';

const { enabledRules: enabledBabelRules } = require('../partials/babel');
const { babelResetRules: babelResetMainRules } = require('../partials/main');

/**
 * TODO:
 * Update this config and README according to documentation:
 * @see {@link https://www.npmjs.com/package/@babel/eslint-parser}
 */

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: false,
  },
  rules: {
    ...babelResetMainRules,
    ...enabledBabelRules,
  },
};
