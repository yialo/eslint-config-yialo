'use strict';

const { importRules_webBundle_jest } = require('../partials/import');
const { jestRules_own } = require('../partials/jest');

module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...jestRules_own,
    ...importRules_webBundle_jest,
  },
};
