'use strict';

const { coreRules_extensibleWithBabel_only } = require('./core/extensible-babel');
const { coreRules_extensibleShared } = require('./core/extensible-shared');

const { getDisabledRuleSet } = require('./utils');

const coreRules_extensibleWithBabel_full = {
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithBabel_only,
};

const babelRules = {
  '@babel/new-cap': coreRules_extensibleWithBabel_full['new-cap'],
  '@babel/no-invalid-this': coreRules_extensibleWithBabel_full['no-invalid-this'],
  '@babel/no-unused-expressions': coreRules_extensibleWithBabel_full['no-unused-expressions'],
  '@babel/object-curly-spacing': coreRules_extensibleWithBabel_full['object-curly-spacing'],
  '@babel/semi': coreRules_extensibleWithBabel_full.semi,
};

const babelRules_OFF = getDisabledRuleSet(babelRules);

module.exports = {
  babelRules,
  babelRules_OFF,
};
