'use strict';

const { importRules_node } = require('../partials/import');

const { nodeRules } = require('../partials/node');

module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    ...importRules_node,
    ...nodeRules,
  },
};
