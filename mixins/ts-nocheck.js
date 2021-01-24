'use strict';

const { tsSettings: tsImportSettings } = require('../partials/import');

const { tsNonTypeCheckExtensibleCoreRulesReset } = require('../partials/core');
const { nonTypeCheckTsRules } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...tsNonTypeCheckExtensibleCoreRulesReset,
    ...nonTypeCheckTsRules,
  },
  settings: {
    ...tsImportSettings,
  },
};
