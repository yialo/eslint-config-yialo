'use strict';

const {
  webRules: webImportRules,
  webSettings: webImportSettings,
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
    ...webImportRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    ...webImportSettings,
    ...reactSettings,
  },
};
