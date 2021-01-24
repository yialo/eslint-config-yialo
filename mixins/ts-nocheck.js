'use strict';

const { tsSettings: tsImportSettings } = require('../partials/import');

const { nonTypeCheckTsExtensibleCoreRulesReset } = require('../partials/core');
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
