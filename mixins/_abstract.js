'use strict';

const { babelRules_RESET } = require('../partials/babel');
const {
  coreRules_nonExtensible,
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithTs,
} = require('../partials/core');
const { importRules_BASE, importSettings_BASE } = require('../partials/import');
const {
  jestRules_own_RESET,
  jestRules_extension_typeCheckOnly_RESET,
} = require('../partials/jest');
const { jsxA11yRules_RESET } = require('../partials/jsx-a11y');
const { nodeRules_RESET } = require('../partials/node');
const { promiseRules } = require('../partials/promise');
const { reactRules_RESET } = require('../partials/react');
const { reactHooksRules_RESET } = require('../partials/react-hooks');
const { tsRules_RESET } = require('../partials/typescript');

const coreRules = {
  ...coreRules_nonExtensible,
  ...coreRules_extensibleWithBabel,
  ...coreRules_extensibleWithTs,
};

const compilerRelatedPluginRules_RESET = {
  ...babelRules_RESET,
  ...tsRules_RESET,
  ...jestRules_extension_typeCheckOnly_RESET,
};

const envOrFrameworkRelatedPluginRules_RESET = {
  ...jestRules_own_RESET,
  ...jsxA11yRules_RESET,
  ...nodeRules_RESET,
  ...reactRules_RESET,
  ...reactHooksRules_RESET,
};

module.exports = {
  env: {
    browser: false,
    es2021: true,
    jest: false,
    node: false,
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
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
    sourceType: 'script',
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...compilerRelatedPluginRules_RESET,
    ...envOrFrameworkRelatedPluginRules_RESET,
    ...coreRules,
    ...importRules_BASE,
    ...promiseRules,
  },
  settings: {
    ...importSettings_BASE,
  },
};
