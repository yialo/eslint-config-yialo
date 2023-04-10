'use strict';

const { MyRuleEntryNormalized } = require('./my-rule-entry-normalized');

module.exports.getMyRuleGroups = (myRulesObject) => {
  const myRuleEntryTuples = Object.entries(myRulesObject).map((ruleEntry) => {
    const ruleName = ruleEntry[0];
    return [ruleName, new MyRuleEntryNormalized(ruleEntry)];
  });
  const myRuleNames = myRuleEntryTuples.map(([name]) => name);

  return {
    myRuleEntryTuples,
    myRuleNames,
  };
};
