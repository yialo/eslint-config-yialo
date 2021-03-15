'use strict';

const { baseJestRules } = require('../partials/jest');

module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...baseJestRules,
  },
};
