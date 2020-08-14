'use strict';

const { nodeRules: importRules } = require('../partials/import.js');
const { nodeRules } = require('../partials/node.js');

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
