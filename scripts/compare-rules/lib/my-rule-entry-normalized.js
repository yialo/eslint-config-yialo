'use strict';

module.exports.MyRuleEntryNormalized = class {
  constructor(myRuleEntryRaw) {
    const [myRuleName, myRuleConfigRaw] = myRuleEntryRaw;
    const configIsArray = Array.isArray(myRuleConfigRaw);

    this.name = myRuleName;
    this.severity = configIsArray ? myRuleConfigRaw[0] : myRuleConfigRaw;
    this.config = configIsArray ? myRuleConfigRaw.slice(1) : [];
    this.configuredAsArray = configIsArray;
  }
};
