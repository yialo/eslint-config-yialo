'use strict';

const { tsTypeCheckResetRules: tsTypeCheckResetMainRules } = require('../partials/main');
const { enabledTypeCheckRules: enabledTypeCheckTsRules } = require('../partials/typescript');

module.exports = {
  rules: {
    ...tsTypeCheckResetMainRules,
    ...enabledTypeCheckTsRules,
  },
};
