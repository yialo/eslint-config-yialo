'use strict';

const {
  baseRules: importRules,
  baseSettings: importSettings,
} = require('./partials/import.js');
const { baseRules: mainRules } = require('./partials/main.js');
const { baseRules: promiseRules } = require('./partials/promise.js');

module.exports = {
  env: {
    es6: true,
  },
  plugins: [
    '@typescript-eslint',
    'babel',
    'import',
    'jest',
    'jsx-a11y',
    'node',
    'promise',
    'react-hooks',
    'react',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...mainRules,
    ...importRules,
    ...promiseRules,
  },
  settings: {
    ...importSettings,
  },
};
