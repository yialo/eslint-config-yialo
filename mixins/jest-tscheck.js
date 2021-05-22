'use strict';

const { jestImportRules } = require('../partials/import');
const { tsCheckJestRules } = require('../partials/jest');

module.exports = {
  rules: {
    ...tsCheckJestRules,
    ...jestImportRules,
  },
};
