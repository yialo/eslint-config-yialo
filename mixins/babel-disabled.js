'use strict';

const { disabledRules } = require('../partials/babel');
const { babelExtensibleRules } = require('../partials/main');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
  },
  rules: {
    ...disabledRules,
    ...babelExtensibleRules,
  },
};
