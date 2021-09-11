'use strict';

const { babelRules_RESET } = require('../partials/babel');
const {
  coreRules_nonExtensible,
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithTs,
} = require('../partials/core');
const { importRules_BASE, importSettings_BASE } = require('../partials/import');
const { promiseRules_BASE } = require('../partials/promise');
const { tsRules_RESET } = require('../partials/typescript');

const coreRules = {
  ...coreRules_nonExtensible,
  ...coreRules_extensibleWithBabel,
  ...coreRules_extensibleWithTs,
};

const extensionPluginRules_RESET = {
  ...babelRules_RESET,
  ...tsRules_RESET,
};

module.exports = {
  env: {
    es2021: true,
  },
  plugins: [
    '@babel',
    '@next/next',
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
    ...coreRules,
    ...extensionPluginRules_RESET,
    ...importRules_BASE,
    ...promiseRules_BASE,
  },
  settings: {
    ...importSettings_BASE,
  },
};
