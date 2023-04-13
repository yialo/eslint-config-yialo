'use strict';

const { MyRuleEntryNormalized } = require('../entities/my-rule-entry');

const prepareMyRuleGroups = (myRulesObject) => {
  const myRuleEntries = Object.entries(myRulesObject).map((ruleEntry) => {
    const ruleName = ruleEntry[0];
    return [ruleName, new MyRuleEntryNormalized(ruleEntry)];
  });

  const myRuleNames = myRuleEntries.map(([name]) => name);

  return {
    myRuleEntries,
    myRuleNames,
  };
};

Object.assign(module.exports, {
  prepareMyRuleGroups,
});
