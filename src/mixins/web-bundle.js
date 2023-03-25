'use strict';

const { importRules_webBundle_BASE } = require('../partials/import');


module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    ...importRules_webBundle_BASE,
  },
};
