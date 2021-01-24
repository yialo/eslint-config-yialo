'use strict';

const { tsTypeCheckOnlyExtensibleCoreRulesReset } = require('../partials/core');
const { typeCheckTsRules } = require('../partials/typescript');

module.exports = {
  rules: {
    ...tsTypeCheckOnlyExtensibleCoreRulesReset,
    ...typeCheckTsRules,
  },
};
