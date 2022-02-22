'use strict';

const { rules: referenceJestRules } = require('eslint-plugin-jest');

const { jestRules, jestTsRules_typeCheckOnly } = require('../../partials/jest');
const { compareRuleLists } = require('./utils');

const referenceJestRuleNames = Object.keys(referenceJestRules).map(
  (ruleName) => `jest/${ruleName}`,
);

const deprecaredReferenceJestRuleNames = Object.entries(referenceJestRules)
  .filter((ruleEntry) => {
    const rule = ruleEntry[1];
    return rule.meta.deprecated;
  })
  .map(([ruleName]) => `jest/${ruleName}`);

const myJestRuleNames = Object.keys({
  ...jestRules,
  ...jestTsRules_typeCheckOnly,
});

compareRuleLists(
  {
    deprecatedRuleNames: deprecaredReferenceJestRuleNames,
    myRuleNames: myJestRuleNames,
    referenceRuleNames: referenceJestRuleNames,
  },
  'jest',
);
