'use strict';

const { loggerUtil } = require('../shared');

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

const reportDisabledRuleConfiguredAsArray = (myRuleName) => {
  loggerUtil.logAndThrow(
    `Rule ${myRuleName}: disabled rule should be configured as string, not array`,
  );
};

Object.assign(module.exports, {
  MyRuleEntryNormalized,
  reportDisabledRuleConfiguredAsArray,
});
