'use strict';

const { typeCheckOnlyTsExtensibleCoreRulesReset } = require('../partials/core');
const { typeCheckOnlyTsRules } = require('../partials/typescript');

module.exports = {
  rules: {
    ...typeCheckOnlyTsExtensibleCoreRulesReset,
    ...typeCheckOnlyTsRules,
  },
};
