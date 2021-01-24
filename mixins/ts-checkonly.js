'use strict';

const { tsTypeCheckOnlyResetRules: tsTypeCheckResetMainRules } = require('../partials/core');
const { enabledTypeCheckRules: enabledTypeCheckTsRules } = require('../partials/typescript');

module.exports = {
  rules: {
    ...tsTypeCheckResetMainRules,
    ...enabledTypeCheckTsRules,
  },
};
