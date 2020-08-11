'use strict';

const { jestRules } = require('./partials/jest.js');

module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    ...jestRules,
  },
};
