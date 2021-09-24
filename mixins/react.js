'use strict';

const { importSettings_webBundle_react_BASE } = require('../partials/import');
const { jsxA11yRules } = require('../partials/jsx-a11y');
const { reactRules, reactSettings } = require('../partials/react');
const { reactHooksRules } = require('../partials/react-hooks');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    ...importSettings_webBundle_react_BASE,
    ...reactSettings,
  },
};
