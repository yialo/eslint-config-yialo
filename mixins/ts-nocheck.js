'use strict';

const { coreRules_extensibleWithTs_nonTypeCheck_RESET } = require('../partials/core');
const { importSettings_ts } = require('../partials/import');
const { tsRules_nonTypeCheck } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...coreRules_extensibleWithTs_nonTypeCheck_RESET,
    ...tsRules_nonTypeCheck,
  },
  settings: {
    ...importSettings_ts,
  },
};
