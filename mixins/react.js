'use strict';

const { importRules_browser, importSettings_browser } = require('../partials/import');
const { jsxA11yRules } = require('../partials/jsx-a11y');
const { reactRules_BASE, reactSettings_react } = require('../partials/react');
const { reactHooksRules } = require('../partials/react-hooks');

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
    ...importRules_browser,
    ...jsxA11yRules,
    ...reactRules_BASE,
    ...reactHooksRules,
  },
  settings: {
    ...importSettings_browser,
    ...reactSettings_react,
  },
};
