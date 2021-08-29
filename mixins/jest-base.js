'use strict';

const { jestImportRules } = require('../partials/import');
const { baseJestRules } = require('../partials/jest');

module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...baseJestRules,
    ...jestImportRules,
  },
};
