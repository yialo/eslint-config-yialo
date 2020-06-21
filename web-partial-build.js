'use strict';

const { nodeRules: importNodeRules } = require('./groups/import.js');
const { rules: nodeRules } = require('./groups/node.js');

module.exports = {
  env: {
    node: true,
  },
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  plugins: [
    'node',
  ],
  rules: {
    ...nodeRules,
    ...importNodeRules,
  },
  settings: {
    'import/resolver': 'node',
  },
};
