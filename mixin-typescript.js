'use strict';

const { tsRules: babelRules } = require('./partials/babel.js');
const { tsResetRules: mainResetRules } = require('./partials/main.js');
const { tsSettings: importSettings } = require('./partials/import.js');
const { tsRules } = require('./partials/typescript.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...mainResetRules,
    ...babelRules,
    ...tsRules,
  },
  settings: {
    ...importSettings,
  },
};
