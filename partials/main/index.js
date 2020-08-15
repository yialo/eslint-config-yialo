'use strict';

const { babelExtensibleRules, babelResetRules } = require('./extensible-babel');
const { commonExtensibleRules } = require('./extensible-common');
const { tsExtensibleRules, tsResetRules } = require('./extensible-typescript');
const { nonExtensibleRules } = require('./non-extensible');

const extensibleRules = {
  ...commonExtensibleRules,
  ...babelExtensibleRules,
  ...tsExtensibleRules,
};

const baseRules = {
  ...nonExtensibleRules,
  ...extensibleRules,
};

module.exports = {
  baseRules,
  extensibleRules,
  babelResetRules,
  tsResetRules,
};
