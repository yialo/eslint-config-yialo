'use strict';

const { nonTypeCheckTsExtensibleCoreRulesReset } = require('../partials/core');
const { tsSettings: tsImportSettings } = require('../partials/import');
const { nonTypeCheckTsRules } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...nonTypeCheckTsExtensibleCoreRulesReset,
    ...nonTypeCheckTsRules,
  },
  settings: {
    ...tsImportSettings,
  },
};
