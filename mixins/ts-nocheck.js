'use strict';

const { tsSettings: tsImportSettings } = require('../partials/import');

const { tsNonTypeCheckResetRules: tsNonTypeCheckResetMainRules } = require('../partials/main');
const { enabledRegularRules: enabledRegularTsRules } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    ...tsNonTypeCheckResetMainRules,
    ...enabledRegularTsRules,
  },
  settings: {
    ...tsImportSettings,
  },
};
