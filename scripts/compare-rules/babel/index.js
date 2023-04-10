'use strict';

const { rules: referenceRules } = require('@babel/eslint-plugin');

const { babelRules: myRules } = require('../../../src/partials/babel');
const { loggerUtil, MyRuleEntryNormalized } = require('../_utils');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `@babel/${ruleName}`,
);

const myRuleEntryTuples = Object.entries(myRules).map((ruleEntry) => {
  const ruleName = ruleEntry[0];
  return [ruleName, new MyRuleEntryNormalized(ruleEntry)];
});

console.log({
  referenceRuleNames,
  myRuleEntryTuples,
});
