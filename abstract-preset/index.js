'use strict';

const { baseRules } = require('../plugins/pure.js');
const { importRules: importBaseRules } = require('../plugins/import.js');
const { rules: promiseRules } = require('../plugins/import.js');

module.exports = {
  env: {
    es6: true,
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
    ...promiseRules,
  },
};
