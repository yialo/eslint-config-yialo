'use strict';

const { rules: referenceJestRules } = require('eslint-plugin-jest');

const { jestRules, jestTsRules_typeCheckOnly } = require('../../partials/jest');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceJestRuleNames = Object.keys(referenceJestRules).map(
  (ruleName) => `jest/${ruleName}`,
);

const deprecaredReferenceJestRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceJestRules),
  'jest',
);

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
  { pluginName: 'jest' },
);
