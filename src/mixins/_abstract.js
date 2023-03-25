'use strict';

/* Import
 * ====== */

const { babelRules_OFF } = require('../partials/babel');

const {
  coreRules_extensibleWithBabel_only,
} = require('../partials/core/extensible-babel');
const {
  coreRules_extensibleShared,
} = require('../partials/core/extensible-shared');
const {
  coreRules_extensibleWithTs_nonTypeCheck,
  coreRules_extensibleWithTs_typeCheckOnly,
} = require('../partials/core/extensible-ts');
const { coreRules_nonExtensible } = require('../partials/core/non-extensible');
const {
  coreRules_tsCompat_nonTypeCheck,
  coreRules_tsCompat_typeCheckOnly,
} = require('../partials/core/ts-compat');

const { importRules_BASE, importSettings_BASE } = require('../partials/import');

const {
  jestRules_OFF,
  jestTsRules_typeCheckOnly_OFF,
} = require('../partials/jest');

const { jsxA11yRules_OFF } = require('../partials/jsx-a11y');

const { nodeRules_OFF } = require('../partials/node');

const { promiseRules } = require('../partials/promise');

const { reactRules_OFF } = require('../partials/react');

const { reactHooksRules_OFF } = require('../partials/react-hooks');

const {
  tsRules_extension_nonTypeCheck_OFF,
  tsRules_extension_typeCheckOnly_OFF,
} = require('../partials/typescript/extension');
const {
  tsRules_own_nonTypeCheck_OFF,
  tsRules_own_typeCheckOnly_nonExtensible_OFF,
  tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
} = require('../partials/typescript/own');

/* Compose
 * ======= */

const coreRules_extensibleWithTs_only = {
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
  ...coreRules_extensibleWithTs_typeCheckOnly,
};

const coreRules_full = {
  ...coreRules_nonExtensible,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleWithTs_only,
};

const tsRules_OFF = {
  ...tsRules_own_nonTypeCheck_OFF,
  ...tsRules_extension_nonTypeCheck_OFF,
  ...tsRules_own_typeCheckOnly_nonExtensible_OFF,
  ...tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
  ...tsRules_extension_typeCheckOnly_OFF,
};

const compilerRelatedPluginRules_OFF = {
  ...babelRules_OFF,
  ...tsRules_OFF,
  ...jestTsRules_typeCheckOnly_OFF,
};

const envOrFrameworkRelatedPluginRules_OFF = {
  ...jestRules_OFF,
  ...jsxA11yRules_OFF,
  ...nodeRules_OFF,
  ...reactRules_OFF,
  ...reactHooksRules_OFF,
};

/* Create config mixin
 * =================== */

module.exports = {
  env: {
    browser: false,
    es2022: true,
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
