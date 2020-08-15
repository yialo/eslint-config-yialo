'use strict';

const { enabledRules: babelRules } = require('../partials/babel');
const {
  webRules: importRules,
  webSettings: importSettings,
} = require('../partials/import');
const { webRules: jsxA11yRules } = require('../partials/jsx-a11y');
const { babelResetRules: mainRules } = require('../partials/main');
const {
  webRules: reactRules,
  webSettings: reactSettings,
} = require('../partials/react');
const { webRules: reactHooksRules } = require('../partials/react-hooks');

module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    ...mainRules,
    ...babelRules,
    ...importRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    ...importSettings,
    ...reactSettings,
  },
};
