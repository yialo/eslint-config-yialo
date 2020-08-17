'use strict';

/**
 * NOTE:
 * Old version:
 * https://github.com/babel/eslint-plugin-babel
 * I target the new version:
 * https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
 */

// TODO: replace with @babel/eslint-parser and @babel/eslint-plugin when Babel 8 would be released

const { babelExtensibleRules } = require('./main');
const { getDisabledRuleSet } = require('./utils');

const enabledRules = {
  // Old
  'babel/camelcase': 'off',
  'babel/new-cap': babelExtensibleRules['new-cap'],
  'babel/no-invalid-this': babelExtensibleRules['no-invalid-this'],
  'babel/no-unused-expressions': babelExtensibleRules['no-unused-expressions'],
  'babel/object-curly-spacing': babelExtensibleRules['object-curly-spacing'],
  // Old
  'babel/quotes': 'off',
  'babel/semi': babelExtensibleRules.semi,
  // Old
  'babel/valid-typeof': 'off',
};

const disabledRules = getDisabledRuleSet(enabledRules);

module.exports = {
  disabledRules,
  enabledRules,
};
