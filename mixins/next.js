'use strict';

const { importRules_next } = require('../partials/import');
const { nextRules } = require('../partials/next');
const { reactRules_BASE, reactSettings_react, reactRules_next } = require('../partials/react');
const { reactHooksRules } = require('../partials/react-hooks');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...nextRules,
    ...importRules_next,
    ...reactRules_BASE,
    ...reactRules_next,
    ...reactHooksRules,
  },
  settings: {
    ...reactSettings_react,
  },
};
