'use strict';

const { babelExtensibleCoreRules, babelExtensibleCoreRulesReset } = require('./extensible-babel');
const {
  tsExtensibleCoreRules,
  tsNonTypeCheckExtensibleCoreRulesReset,
  tsTypeCheckOnlyExtensibleCoreRulesReset,
} = require('./extensible-typescript');
const { nonExtensibleCoreRules } = require('./non-extensible');

module.exports = {
  nonExtensibleCoreRules,
  babelExtensibleCoreRules,
  babelExtensibleCoreRulesReset,
  tsExtensibleCoreRules,
  tsNonTypeCheckExtensibleCoreRulesReset,
  tsTypeCheckOnlyExtensibleCoreRulesReset,
};
