'use strict';

const { enabledRules: babelRules } = require('../partials/babel.js');
const {
  webRules: importRules,
  webSettings: importSettings,
} = require('../partials/import.js');
const { webRules: jsxA11yRules } = require('../partials/jsx-a11y.js');
const { webResetRules: mainRules } = require('../partials/main.js');
const {
  webRules: reactRules,
  webSettings: reactSettings,
} = require('../partials/react.js');
const { webRules: reactHooksRules } = require('../partials/react-hooks.js');

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
