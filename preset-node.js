'use strict';

const { nodeRules: babelRules } = require('./partials/babel.js');
const {
  nodeRules: importRules,
  nodeSettings: importSettings,
} = require('./partials/import.js');
const { nodeRules: mainRules } = require('./partials/main.js');
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
  plugins: [
    'node',
  ],
  rules: {
    ...mainRules,
    ...babelRules,
    ...importRules,
    ...nodeRules,
  },
  settings: {
    ...importSettings,
  },
};
