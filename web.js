'use strict';

const { rules: baseRules } = require('./groups/base.js');
const {
  baseRules: importBaseRules,
  webRules: importWebRules,
} = require('./groups/import.js');
const { rules: jsxA11yRules } = require('./groups/jsx-a11y.js');
const { rules: promiseRules } = require('./groups/promise.js');
const {
  rules: reactRules,
  settings: reactSettings,
} = require('./groups/react.js');
const { rules: reactHooksRules } = require('./groups/react-hooks.js');

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'promise',
    'react',
    'react-hooks',
  ],
  rules: {
    ...baseRules,
    ...importBaseRules,
    ...importWebRules,
    ...jsxA11yRules,
    ...promiseRules,
    ...reactRules,
    ...reactHooksRules,
    'import/no-unassigned-import': [
      'error',
      {
        allow: [
          '**/*.{?(s)css,jp?(e)g,png,svg}',
        ],
      },
    ],
  },
  settings: {
    ...reactSettings,
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ],
    'import/ignore': [
      'node_modules',
      '\\.json$'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx'
      ],
    },
    'import/resolver': 'webpack',
  },
};
