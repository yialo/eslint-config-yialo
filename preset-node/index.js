'use strict';

const { nodeRules } = require('./plugins/node.js');
const {
  nodeRules: importNodeRules,
  nodeSettings: importNodeSettings,
} = require('../plugins/import.js');

module.exports = {
  extends: ['../abstract-preset/index.js'],
  env: {
    node: true,
  },
  plugins: [
    'node',
  ],
  rules: {
    ...nodeRules,
    ...importNodeRules,
  },
  settings: {
    ...importNodeSettings,
  },
};
