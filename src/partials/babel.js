'use strict';

const { coreRules_extensibleWithBabel_only } = require('./core/extensible-babel');
const { coreRules_extensibleShared } = require('./core/extensible-shared');

const { getDisabledRuleSet } = require('./_utils');


const babelRules = {
  /* Shared extension rules
   * ====================== */
  '@babel/no-invalid-this': coreRules_extensibleShared['no-invalid-this'],
  '@babel/no-unused-expressions': coreRules_extensibleShared['no-unused-expressions'],
  '@babel/object-curly-spacing': coreRules_extensibleShared['object-curly-spacing'],
  '@babel/semi': coreRules_extensibleShared['semi'],


  /* Babel-only extension rules
   * ========================== */
  '@babel/new-cap': coreRules_extensibleWithBabel_only['new-cap'],
};

const babelRules_OFF = getDisabledRuleSet(babelRules);


module.exports = {
  babelRules,
  babelRules_OFF,
};
