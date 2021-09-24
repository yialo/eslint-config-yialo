'use strict';

const { coreRules_extensibleWithTs_nonTypeCheck_full_OFF } = require('../partials/core/extensible-ts');
const { importSettings_webBundle_react_ts } = require('../partials/import');
const { tsRules_nonTypeCheck } = require('../partials/typescript');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true,
  },
  rules: {
    ...coreRules_extensibleWithTs_nonTypeCheck_full_OFF,
    ...tsRules_nonTypeCheck,
  },
  settings: {
    ...importSettings_webBundle_react_ts,
  },
};
