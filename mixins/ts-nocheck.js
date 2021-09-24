'use strict';

const { coreRules_extensibleShared_OFF } = require('../partials/core/extensible-shared');
const { coreRules_extensibleWithTs_nonTypeCheck_OFF } = require('../partials/core/extensible-ts');
const { coreRules_tsCompat_nonTypeCheck_OFF } = require('../partials/core/ts-compat');

const { importSettings_webBundle_react_ts } = require('../partials/import');

const { tsRules_nonTypeCheck } = require('../partials/typescript');


const coreRules_extensibleWithTs_nonTypeCheck_full_OFF = {
  // All Babel/TS-shared extensible rules belong to nonTypeCheck group
  ...coreRules_extensibleShared_OFF,
  ...coreRules_tsCompat_nonTypeCheck_OFF,
  ...coreRules_extensibleWithTs_nonTypeCheck_OFF,
};


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
