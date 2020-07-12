'use strict';

const { tsRules: mainRules } = require('./partials/main.js');
const { tsSettings: importSettings } = require('./partials/import.js');

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    ...mainRules,
  },
  settings: {
    ...importSettings,
  },
};
