'use strict';

const { rules: referenceRules } = require('eslint-plugin-jest');

const {
  jestRules,
  jestTsRules_typeCheckOnly,
} = require('../../../src/partials/jest');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `jest/${ruleName}`,
);

const myRuleNames = Object.keys({
  ...jestRules,
  ...jestTsRules_typeCheckOnly,
});
