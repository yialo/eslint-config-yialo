'use strict';

const { jestRules } = require('../partials/jest');

module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...jestRules,
  },
};
