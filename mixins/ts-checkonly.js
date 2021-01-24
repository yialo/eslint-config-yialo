'use strict';

const { tsTypeCheckOnlyExtensibleCoreRulesReset } = require('../partials/core');
const { enabledTypeCheckRules: enabledTypeCheckTsRules } = require('../partials/typescript');

module.exports = {
  rules: {
    ...tsTypeCheckOnlyExtensibleCoreRulesReset,
    ...enabledTypeCheckTsRules,
  },
};
