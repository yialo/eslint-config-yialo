'use strict';

const MyRuleEntryNormalized = class {
  constructor(myRuleEntryRaw) {
    const [myRuleName, myRuleConfigRaw] = myRuleEntryRaw;
    const configIsArray = Array.isArray(myRuleConfigRaw);

    this.name = myRuleName;
    this.severity = configIsArray ? myRuleConfigRaw[0] : myRuleConfigRaw;
    this.config = configIsArray ? myRuleConfigRaw.slice(1) : [];
    this.configuredAsArray = configIsArray;
  }
};

// TODO: maybe replace myRuleEntryTuples with MyRuleEntryNormalized[]
const getMyRuleGroups = (myRulesObject) => {
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

Object.assign(module.exports, {
  MyRuleEntryNormalized,
  getMyRuleGroups,
});
