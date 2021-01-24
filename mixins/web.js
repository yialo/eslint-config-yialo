'use strict';

const { webImportRules, webImportSettings } = require('../partials/import');
const { webJsxA11yRules } = require('../partials/jsx-a11y');
const { webReactRules, webReactSettings } = require('../partials/react');
const { webReactHooksRules } = require('../partials/react-hooks');

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    ...webImportRules,
    ...webJsxA11yRules,
    ...webReactRules,
    ...webReactHooksRules,
  },
  settings: {
    ...webImportSettings,
    ...webReactSettings,
  },
};
