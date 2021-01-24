'use strict';

const { babelExtensibleCoreRules, babelExtensibleCoreRulesReset } = require('./extensible-babel');
const {
  tsExtensibleCoreRules,
  nonTypeCheckTsExtensibleCoreRulesReset,
  typeCheckOnlyTsExtensibleCoreRulesReset,
} = require('./extensible-typescript');
const { nonExtensibleCoreRules } = require('./non-extensible');

module.exports = {
  nonExtensibleCoreRules,
  babelExtensibleCoreRules,
  babelExtensibleCoreRulesReset,
  tsExtensibleCoreRules,
  nonTypeCheckTsExtensibleCoreRulesReset,
  typeCheckOnlyTsExtensibleCoreRulesReset,
};
