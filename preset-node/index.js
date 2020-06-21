'use strict';

const {
  nodeRules: importNodeRules,
  nodeSettings: importNodeSettings,
} = require('../plugins/import.js');
const { nodeRules: pureNodeRules } = require('../plugins/pure.js');

const { rules: nodeRules } = require('./plugins/node.js');

module.exports = {
  extends: ['../abstract-preset/index.js'],
  env: {
    node: true,
  },
  plugins: [
    'node',
  ],
  rules: {
    ...pureNodeRules,
    ...importNodeRules,
    ...nodeRules,
  },
  settings: {
    ...importNodeSettings,
  },
};
