'use strict';

const { babelExtensibleRules, babelResetRules } = require('./extensible-babel');
const { tsExtensibleRules, tsResetRules } = require('./extensible-typescript');
const { nonExtensibleRules } = require('./non-extensible');

const baseRules = {
  ...nonExtensibleRules,
  ...babelExtensibleRules,
  ...tsExtensibleRules,
};

module.exports = {
  baseRules,
  babelExtensibleRules,
  babelResetRules,
  tsExtensibleRules,
  tsResetRules,
};
