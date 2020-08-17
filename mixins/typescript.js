'use strict';

const { tsSettings: tsImportSettings } = require('../partials/import');
const { tsResetRules: tsResetMainRules } = require('../partials/main');
const { enabledRules: enabledTsRules } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    ...tsResetMainRules,
    ...enabledTsRules,
  },
  settings: {
    ...tsImportSettings,
  },
};
