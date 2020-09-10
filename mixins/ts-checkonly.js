'use strict';

const { tsTypeCheckOnlyResetRules: tsTypeCheckResetMainRules } = require('../partials/main');
const { enabledTypeCheckRules: enabledTypeCheckTsRules } = require('../partials/typescript');

module.exports = {
  rules: {
    ...tsTypeCheckResetMainRules,
    ...enabledTypeCheckTsRules,
  },
};
