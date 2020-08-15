'use strict';

const { nodeRules: importRules } = require('../partials/import');
const { nodeRules } = require('../partials/node');

module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    ...importRules,
    ...nodeRules,
  },
};
