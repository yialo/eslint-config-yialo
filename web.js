'use strict';

const { rules: baseRules } = require('./groups/base.js');
const {
  ruleGroups: { base: importRules },
  settingGroups: { base: importSettings },
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
    ...importRules,
    ...jsxA11yRules,
    ...promiseRules,
    ...reactRules,
    ...reactHooksRules,
  },
  settings: {
    ...importSettings,
    ...reactSettings,
  }
};
