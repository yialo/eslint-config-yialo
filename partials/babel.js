'use strict';

/**
 * NOTE:
 * Old version:
 * @see {@link https://github.com/babel/eslint-plugin-babel}
 * I target the new version:
 * @see {@link https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin}
 */

const { babelExtensibleRules } = require('./main');
const { getDisabledRuleSet } = require('./utils');

const enabledRules = {
  'babel/new-cap': babelExtensibleRules['new-cap'],
  'babel/no-invalid-this': babelExtensibleRules['no-invalid-this'],
  'babel/no-unused-expressions': babelExtensibleRules['no-unused-expressions'],
  'babel/object-curly-spacing': babelExtensibleRules['object-curly-spacing'],
  'babel/semi': babelExtensibleRules.semi,
};

const disabledRules = getDisabledRuleSet(enabledRules);

module.exports = {
  disabledRules,
  enabledRules,
};
