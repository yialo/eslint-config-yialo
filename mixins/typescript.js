'use strict';

const { disabledRules: babelRules } = require('../partials/babel.js');
const { tsSettings: importSettings } = require('../partials/import.js');
const { tsResetRules: mainRules } = require('../partials/main.js');
const { tsRules } = require('../partials/typescript.js');

module.exports = {
  parser: '@typescript-eslint/parser',
  rules: {
    ...mainRules,
    ...babelRules,
    ...tsRules,
  },
  settings: {
    ...importSettings,
  },
};
