'use strict';

const { babelRules_OFF } = require('../partials/babel');
const {
  coreRules_nonExtensible,
  coreRules_extensibleShared,
  coreRules_extensibleWithBabel_only,
  coreRules_extensibleWithTs_only,
} = require('../partials/core');
const { importRules_BASE, importSettings_BASE } = require('../partials/import');
const {
  jestRules_own_OFF,
  jestRules_extension_typeCheckOnly_OFF,
} = require('../partials/jest');
const { jsxA11yRules_OFF } = require('../partials/jsx-a11y');
const { nodeRules_OFF } = require('../partials/node');
const { promiseRules } = require('../partials/promise');
const { reactRules_OFF } = require('../partials/react');
const { reactHooksRules_OFF } = require('../partials/react-hooks');
const { tsRules_OFF } = require('../partials/typescript');

const coreRules_full = {
  ...coreRules_nonExtensible,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleWithTs_only,
};

const compilerRelatedPluginRules_OFF = {
  ...babelRules_OFF,
  ...tsRules_OFF,
  ...jestRules_extension_typeCheckOnly_OFF,
};

const envOrFrameworkRelatedPluginRules_OFF = {
  ...jestRules_own_OFF,
  ...jsxA11yRules_OFF,
  ...nodeRules_OFF,
  ...reactRules_OFF,
  ...reactHooksRules_OFF,
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
      globalReturn: undefined,
      impliedStrict: false,
      jsx: false,
    },
    sourceType: 'script',
  },
  reportUnusedDisableDirectives: true,
  rules: {
    ...compilerRelatedPluginRules_OFF,
    ...envOrFrameworkRelatedPluginRules_OFF,
    ...coreRules_full,
    ...importRules_BASE,
    ...promiseRules,
  },
  settings: {
    ...importSettings_BASE,
  },
};
