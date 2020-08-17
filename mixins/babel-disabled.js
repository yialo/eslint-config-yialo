'use strict';

const { disabledRules: babelRules } = require('../partials/babel');
const { babelExtensibleRules: mainRules } = require('../partials/main');

module.exports = {
  rules: {
    ...mainRules,
    ...babelRules,
  },
};
