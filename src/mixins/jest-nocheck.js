'use strict';

const { importRules_webBundle_jest } = require('../partials/import');

const { jestRules } = require('../partials/jest');


module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...jestRules,
    ...importRules_webBundle_jest,
  },
};
