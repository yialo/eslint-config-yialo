'use strict';

const importRules_BASE = {
  'import/default': 'error',
  'import/dynamic-import-chunkname': 'off',
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': 'off',
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/named': [
    'error',
    {
      commonjs: true,
    },
  ],
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'off',
  'import/no-commonjs': 'off',
  'import/no-cycle': 'error',
  'import/no-default-export': 'off',
  'import/no-deprecated': 'error',
  'import/no-duplicates': [
    'error',
    {
      considerQueryString: true,
    },
  ],
  'import/no-dynamic-require': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'off',
  'import/no-unresolved': [
    'error',
    {
      amd: false,
      caseSensitive: true,
      commonjs: false,
    },
  ],
  'import/no-unused-modules': 'off',
  'import/no-useless-path-segments': [
    'error',
    {
      commonjs: true,
      noUselessIndex: false,
    },
  ],
  'import/no-webpack-loader-syntax': 'error',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
  'import/unambiguous': 'off',
};

const importRules_node = {
  'import/no-commonjs': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-unresolved': [
    'error',
    {
      amd: false,
      caseSensitive: true,
      commonjs: true,
    },
  ],
};

const importRules_webBundle = {
  'import/no-commonjs': [
    'error',
    {
      allowConditionalRequire: false,
      allowPrimitiveModules: false,
      allowRequire: false,
    },
  ],
  'import/no-extraneous-dependencies': [
    'error',
    {
      bundledDependencies: false,
      devDependencies: false,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
  'import/no-nodejs-modules': 'error',
  'import/no-unresolved': [
    'error',
    {
      amd: false,
      caseSensitive: true,
      commonjs: false,
    },
  ],
};

const importRules_webBundle_jest = {
  'import/no-extraneous-dependencies': [
    'error',
    {
      bundledDependencies: false,
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
};

const importSettings_BASE = {
  'import/extensions': [
    '.js',
  ],
  'import/ignore': [
    'node_modules',
  ],
  'import/resolver': 'node',
};

const importSettings_webBundle_react = {
  'import/extensions': [
    '.js',
    '.jsx',
  ],
};

const importSettings_webBundle_ts = {
  'import/extensions': [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
  ],
  'import/parsers': {
    '@typescript-eslint/parser': [
      '.d.ts',
      '.ts',
      '.tsx',
    ],
  },
};

module.exports = {
  importRules_BASE,
  importRules_node,
  importRules_webBundle,
  importRules_webBundle_jest,
  importSettings_BASE,
  importSettings_webBundle_react,
  importSettings_webBundle_ts,
};
