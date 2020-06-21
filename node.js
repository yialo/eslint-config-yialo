'use strict';

const { rules: baseRules } = require('./groups/base.js');
const {
  baseRules: importBaseRules,
  nodeRules: importNodeRules,
} = require('./groups/import.js');
const { rules: promiseRules } = require('./groups/promise.js');

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  plugins: [
    'import',
    'promise',
  ],
  rules: {
    ...baseRules,
    ...importBaseRules,
    ...importNodeRules,
    ...promiseRules,
    'import/no-unassigned-import': 'error',
  },
  settings: {
    'import/extensions': [
      '.js',
    ],
    'import/ignore': [
      'node_modules',
      '\\.json$'
    ],
    'import/resolver': 'node',
  },
};
