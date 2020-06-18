'use strict';

const nodeRules = require('./groups/node.js');

const importRules = {
  'import/no-commonjs': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-nodejs-modules': 'off',
};

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
    'babel',
    'import',
    'node',
    'promise',
  ],
  rules: {
    ...importRules,
    ...nodeRules,
  },
  settings: {
    'import/resolver': 'node',
  },
};
