'use strict';

const { tsSettings: importSettings } = require('../partials/import');
const { tsResetRules } = require('../partials/main');
const { tsRules } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    ...tsResetRules,
    ...tsRules,
  },
  settings: {
    ...importSettings,
  },
};
