'use strict';

const { jestRules } = require('./partials/jest.js');

module.exports = {
  env: {
    jest: true,
  },
  rules: {
    ...jestRules,
  },
};
