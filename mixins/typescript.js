'use strict';

const { disabledRules: babelRules } = require('../partials/babel');
const { tsSettings: importSettings } = require('../partials/import');
const { tsResetRules: mainRules } = require('../partials/main');
const { tsRules } = require('../partials/typescript');

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
