'use strict';

const { disabledRules: babelRules } = require('../partials/babel');
const {
  baseRules: importRules,
  baseSettings: importSettings,
} = require('../partials/import');
const { baseRules: mainRules } = require('../partials/main');
const { baseRules: promiseRules } = require('../partials/promise');

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
    'react',
    'react-hooks',
  ],
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2020,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...mainRules,
    ...babelRules,
    ...importRules,
    ...promiseRules,
  },
  settings: {
    ...importSettings,
  },
};
