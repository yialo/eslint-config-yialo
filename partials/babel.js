'use strict';

const { babelExtensibleCoreRules } = require('./core');
const { getDisabledRuleSet } = require('./utils');

const babelRules = {
  '@babel/new-cap': babelExtensibleCoreRules['new-cap'],
  '@babel/no-invalid-this': babelExtensibleCoreRules['no-invalid-this'],
  '@babel/no-unused-expressions': babelExtensibleCoreRules['no-unused-expressions'],
  '@babel/object-curly-spacing': babelExtensibleCoreRules['object-curly-spacing'],
  '@babel/semi': babelExtensibleCoreRules.semi,
};

const babelRulesReset = getDisabledRuleSet(babelRules);

module.exports = {
  babelRules,
  babelRulesReset,
};
