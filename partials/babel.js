'use strict';

const { babelExtensibleRules } = require('./core');
const { getDisabledRuleSet } = require('./utils');

const enabledRules = {
  '@babel/new-cap': babelExtensibleRules['new-cap'],
  '@babel/no-invalid-this': babelExtensibleRules['no-invalid-this'],
  '@babel/no-unused-expressions': babelExtensibleRules['no-unused-expressions'],
  '@babel/object-curly-spacing': babelExtensibleRules['object-curly-spacing'],
  '@babel/semi': babelExtensibleRules.semi,
};

const disabledRules = getDisabledRuleSet(enabledRules);

module.exports = {
  disabledRules,
  enabledRules,
};
