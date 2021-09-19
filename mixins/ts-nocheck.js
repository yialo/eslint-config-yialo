'use strict';

const { coreRules_extensibleWithTs_nonTypeCheck_OFF } = require('../partials/core');
const { importSettings_webBundle_ts } = require('../partials/import');
const { tsRules_nonTypeCheck } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    ...coreRules_extensibleWithTs_nonTypeCheck_OFF,
    ...tsRules_nonTypeCheck,
  },
  settings: {
    ...importSettings_webBundle_ts,
  },
};
