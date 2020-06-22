'use strict';

const { baseRules: babelRules } = require('./partials/babel.js');
const { baseRules: importRules } = require('./partials/import.js');
const { baseRules: mainRules } = require('./partials/main.js');
const { baseRules: promiseRules } = require('./partials/promise.js');

module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    'babel',
    'import',
    'promise',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    ...mainRules,
    ...babelRules,
    ...importRules,
    ...promiseRules,
  },
};
