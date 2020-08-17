'use strict';

const { nodeRules: nodeImportRules } = require('../partials/import');
const { nodeRules } = require('../partials/node');

module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    ...nodeImportRules,
    ...nodeRules,
  },
};
