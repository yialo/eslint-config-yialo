'use strict';

// TODO: replace with @babel/eslint-parser and @babel/eslint-plugin when Babel 8 would be released

const { extensibleRules } = require('./main');
const { getDisabledRuleSet } = require('./utils');

const enabledRules = {
  'babel/camelcase': extensibleRules.camelcase,
  'babel/new-cap': extensibleRules['new-cap'],
  'babel/no-invalid-this': extensibleRules['no-invalid-this'],
  'babel/no-unused-expressions': extensibleRules['no-unused-expressions'],
  'babel/object-curly-spacing': extensibleRules['object-curly-spacing'],
  'babel/quotes': extensibleRules.quotes,
  'babel/semi': extensibleRules.semi,
  'babel/valid-typeof': extensibleRules['valid-typeof'],
};

const disabledRules = getDisabledRuleSet(enabledRules);

module.exports = {
  disabledRules,
  enabledRules,
};
