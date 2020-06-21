'use strict';

const {
  webRules: importWebRules,
  webSettings: importWebSettings,
} = require('../plugins/import.js');
const { rules: jsxA11yRules } = require('./plugins/jsx-a11y.js');
const {
  rules: reactRules,
  settings: reactSettings,
} = require('./plugins/react.js');
const { rules: reactHooksRules } = require('./plugins/react-hooks.js');

module.exports = {
  extends: ['../abstract-preset/index.js'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    sourceType: 'module',
  },
  plugins: [
    'babel',
    'jsx-a11y',
    'react',
    'react-hooks',
  ],
  rules: {
    ...importWebRules,
    ...jsxA11yRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    ...importWebSettings,
    ...reactSettings,
  },
};
