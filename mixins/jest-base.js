'use strict';

const { importRules_jest } = require('../partials/import');
const { jestRules_BASE } = require('../partials/jest');

module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...jestRules_BASE,
    ...importRules_jest,
  },
};
