'use strict';

const { babelExtensibleCoreRules, babelExtensibleCoreRulesReset } = require('./extensible-babel');
const {
  tsExtensibleRules,
  tsNonTypeCheckExtensibleCoreRulesReset,
  tsTypeCheckOnlyResetRules,
} = require('./extensible-typescript');
const { nonExtensibleCoreRules } = require('./non-extensible');

module.exports = {
  nonExtensibleCoreRules,
  babelExtensibleCoreRules,
  babelExtensibleCoreRulesReset,
  tsExtensibleRules,
  tsNonTypeCheckExtensibleCoreRulesReset,
  tsTypeCheckOnlyResetRules,
};
