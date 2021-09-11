'use strict';

const { coreRules_extensibleWithBabel } = require('./core');
const { getDisabledRuleSet } = require('./utils');

const babelRules = {
  '@babel/new-cap': coreRules_extensibleWithBabel['new-cap'],
  '@babel/no-invalid-this': coreRules_extensibleWithBabel['no-invalid-this'],
  '@babel/no-unused-expressions': coreRules_extensibleWithBabel['no-unused-expressions'],
  '@babel/object-curly-spacing': coreRules_extensibleWithBabel['object-curly-spacing'],
  '@babel/semi': coreRules_extensibleWithBabel.semi,
};

const babelRules_RESET = getDisabledRuleSet(babelRules);

module.exports = {
  babelRules,
  babelRules_RESET,
};
