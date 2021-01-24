'use strict';

const { tsSettings: tsImportSettings } = require('../partials/import');

const { tsNonTypeCheckExtensibleCoreRulesReset } = require('../partials/core');
const { enabledRegularRules: enabledRegularTsRules } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...tsNonTypeCheckExtensibleCoreRulesReset,
    ...enabledRegularTsRules,
  },
  settings: {
    ...tsImportSettings,
  },
};
