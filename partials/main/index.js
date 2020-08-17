'use strict';

const { babelExtensibleRules, babelResetRules } = require('./extensible-babel');
const { tsExtensibleRules, tsResetRules } = require('./extensible-typescript');
const { nonExtensibleRules } = require('./non-extensible');

module.exports = {
  nonExtensibleRules,
  babelExtensibleRules,
  babelResetRules,
  tsExtensibleRules,
  tsResetRules,
};
