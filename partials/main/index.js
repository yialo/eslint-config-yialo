'use strict';

const { babelExtensibleRules, babelResetRules } = require('./extensible-babel');
const {
  tsExtensibleRules,
  tsNonTypeCheckResetRules,
  tsTypeCheckResetRules,
} = require('./extensible-typescript');
const { nonExtensibleRules } = require('./non-extensible');

module.exports = {
  nonExtensibleRules,
  babelExtensibleRules,
  babelResetRules,
  tsExtensibleRules,
  tsNonTypeCheckResetRules,
  tsTypeCheckResetRules,
};
