'use strict';

const { importRules_webBundle, importSettings_webBundle_react } = require('../partials/import');
const { jsxA11yRules } = require('../partials/jsx-a11y');
const { reactRules_BASE, reactSettings } = require('../partials/react');
const { reactHooksRules } = require('../partials/react-hooks');

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...importRules_webBundle,
    ...jsxA11yRules,
    ...reactRules_BASE,
    ...reactHooksRules,
  },
  settings: {
    ...importSettings_webBundle_react,
    ...reactSettings,
  },
};
