'use strict';

const { babelExtensibleCoreRules, babelExtensibleCoreRulesReset } = require('./extensible-babel');
const {
  tsExtensibleRules,
  tsNonTypeCheckResetRules,
  tsTypeCheckOnlyResetRules,
} = require('./extensible-typescript');
const { nonExtensibleRules } = require('./non-extensible');

module.exports = {
  nonExtensibleRules,
  babelExtensibleCoreRules,
  babelExtensibleCoreRulesReset,
  tsExtensibleRules,
  tsNonTypeCheckResetRules,
  tsTypeCheckOnlyResetRules,
};
