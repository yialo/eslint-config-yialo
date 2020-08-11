'use strict';

const { webRules: babelRules } = require('./partials/babel.js');
const {
  webRules: importRules,
  webSettings: importSettings,
} = require('./partials/import.js');
const { webRules: jsxA11yRules } = require('./partials/jsx-a11y.js');
const { webRules: mainRules } = require('./partials/main.js');
const {
  webRules: reactRules,
  webSettings: reactSettings,
} = require('./partials/react.js');
const { webRules: reactHooksRules } = require('./partials/react-hooks.js');

module.exports = {
  extends: ['./preset-abstract.js'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  plugins: [
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    ...mainRules,
    ...babelRules,
    ...importRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    ...importSettings,
    ...reactSettings,
  },
};
