'use strict';

const baseRules = {
  'import/default': 'error',
  'import/dynamic-import-chunkname': 'off',
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': ['error', 'ignorePackages'],
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': 'error',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': 'off',
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
  'import/no-internal-modules': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'error',
  'import/no-unresolved': [
    'error',
    {
      amd: false,
      caseSensitive: true,
      commonjs: true,
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

const nodeRules = {
  'import/no-commonjs': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-nodejs-modules': 'off',
};

const webRules = {
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
};

const baseSettings = {
  'import/ignore': [
    'node_modules',
    '\\.json$',
  ],
  'import/parsers': {
    '@typescript-eslint/parser': [
      '.ts',
      '.tsx',
    ],
  },
};

const nodeSettings = {
  'import/extensions': [
    '.js',
  ],
  'import/resolver': 'node',
};

const webSettings = {
  'import/extensions': [
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
  ],
  'import/resolver': 'webpack',
};

module.exports = {
  baseRules,
  baseSettings,
  nodeRules,
  nodeSettings,
  webRules,
  webSettings,
};
