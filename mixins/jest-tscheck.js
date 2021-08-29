'use strict';

const { tsCheckJestRules } = require('../partials/jest');

module.exports = {
  rules: {
    ...tsCheckJestRules,
  },
};
