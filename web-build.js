'use strict';

const {
  ruleGroups: { node: importRules },
  settingGroups: { node: importSettngs },
} = require('./groups/import.js');
const { rules: nodeRules } = require('./groups/node.js');

const importRules = {
  'import/no-commonjs': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-nodejs-modules': 'off',
};

module.exports = {
  env: {
    node: true,
  },
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script',
  },
  plugins: [
    'node',
  ],
  rules: {
    ...importRules,
    ...nodeRules,
  },
  settings: {
    ...importSettngs,
  },
};
