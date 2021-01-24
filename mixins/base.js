'use strict';

const { disabledRules: disabledBabelRules } = require('../partials/babel');
const {
  baseRules: importRules,
  baseSettings: importSettings,
} = require('../partials/import');
const {
  nonExtensibleRules: nonExtensibleMainRules,
  babelExtensibleRules: babelExtensibleMainRules,
  tsExtensibleRules: tsExtensibleMainRules,
} = require('../partials/core');
const { baseRules: promiseRules } = require('../partials/promise');
const { disabledRules: disabledTsRules } = require('../partials/typescript');

const mainRules = {
  ...nonExtensibleMainRules,
  ...babelExtensibleMainRules,
  ...tsExtensibleMainRules,
};

const disabledRules = {
  ...disabledBabelRules,
  ...disabledTsRules,
};

module.exports = {
  env: {
    es2021: true,
  },
  plugins: [
    '@babel',
    '@typescript-eslint',
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
    sourceType: 'script',
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...mainRules,
    ...disabledRules,
    ...importRules,
    ...promiseRules,
  },
  settings: {
    ...importSettings,
  },
};
