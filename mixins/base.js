'use strict';

const { disabledRules: disabledBabelRules } = require('../partials/babel');
const {
  baseRules: importRules,
  baseSettings: importSettings,
} = require('../partials/import');
const {
  nonExtensibleCoreRules,
  babelExtensibleCoreRules,
  tsExtensibleCoreRules,
} = require('../partials/core');
const { baseRules: promiseRules } = require('../partials/promise');
const { tsRulesReset } = require('../partials/typescript');

const mainRules = {
  ...nonExtensibleCoreRules,
  ...babelExtensibleCoreRules,
  ...tsExtensibleCoreRules,
};

const disabledRules = {
  ...disabledBabelRules,
  ...tsRulesReset,
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
