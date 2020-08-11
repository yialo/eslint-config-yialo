'use strict';

const {
  nodeRules: importRules,
  nodeSettings: importSettings,
} = require('./partials/import.js');
const { nodeRules } = require('./partials/node.js');

module.exports = {
  extends: ['./preset-abstract.js'],
  env: {
    node: true,
  },
  parser: 'espree',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['node'],
  rules: {
    ...importRules,
    ...nodeRules,
  },
  settings: {
    ...importSettings,
  },
};
