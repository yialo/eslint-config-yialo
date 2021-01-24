'use strict';

const { babelRulesReset } = require('../partials/babel');
const {
  nonExtensibleCoreRules,
  babelExtensibleCoreRules,
  tsExtensibleCoreRules,
} = require('../partials/core');
const { baseImportRules, baseImportSettings } = require('../partials/import');
const { basePromiseRules } = require('../partials/promise');
const { tsRulesReset } = require('../partials/typescript');

const coreRules = {
  ...nonExtensibleCoreRules,
  ...babelExtensibleCoreRules,
  ...tsExtensibleCoreRules,
};

const extenderPluginRulesReset = {
  ...babelRulesReset,
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
    ...coreRules,
    ...extenderPluginRulesReset,
    ...baseImportRules,
    ...basePromiseRules,
  },
  settings: {
    ...baseImportSettings,
  },
};
