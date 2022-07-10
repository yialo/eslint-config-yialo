'use strict';

const { rules: referenceRules } = require('eslint-plugin-jest');

const { jestRules, jestTsRules_typeCheckOnly } = require('../../partials/jest');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./_utils');

const referenceRuleNames = Object.keys(referenceRules).map((ruleName) => `jest/${ruleName}`);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(Object.entries(referenceRules), 'jest');

const myRuleNames = Object.keys({
  ...jestRules,
  ...jestTsRules_typeCheckOnly,
});

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'jest',
  },
);
