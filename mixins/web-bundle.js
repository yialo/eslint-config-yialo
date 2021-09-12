'use strict';

const { importRules_webBundle } = require('../partials/import');

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...importRules_webBundle,
  },
};
