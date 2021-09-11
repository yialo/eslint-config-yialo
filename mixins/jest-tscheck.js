'use strict';

const { jestRules_tsCheck } = require('../partials/jest');

module.exports = {
  rules: {
    ...jestRules_tsCheck,
  },
};
