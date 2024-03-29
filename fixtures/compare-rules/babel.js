'use strict';

const { rules: referenceRules } = require('@babel/eslint-plugin');

const { babelRules } = require('../../partials/babel');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceRuleNames = Object.keys(referenceRules).map((ruleName) => `@babel/${ruleName}`);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  '@babel',
);

const myRuleNames = Object.keys(babelRules);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'babel',
  },
);
