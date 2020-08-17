'use strict';

const {
  webRules: importRules,
  webSettings: importSettings,
} = require('../partials/import');
const { webRules: jsxA11yRules } = require('../partials/jsx-a11y');
const {
  webRules: reactRules,
  webSettings: reactSettings,
} = require('../partials/react');
const { webRules: reactHooksRules } = require('../partials/react-hooks');

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
