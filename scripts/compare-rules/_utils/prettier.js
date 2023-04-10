'use strict';

const {
  rules: rulesThatDisturbPrettierConfig,
} = require('../../../node_modules/eslint-config-prettier');

const { RULE_SEVERITY } = require('./dicts');
const { loggerUtil } = require('./logger');

const namesOfRulesThatDisturbPrettier = Object.entries(
  rulesThatDisturbPrettierConfig,
)
  .filter(
    ([_, severity]) =>
      severity === RULE_SEVERITY.OFF.number ||
      severity === RULE_SEVERITY.OFF.string,
  )
  .map(([ruleName]) => ruleName);

module.exports.getNamesOfMyRulesDisturbPrettier = (myRuleEntryTuples) => {
  return myRuleEntryTuples
    .filter(([ruleName, ruleEntry]) => {
      const ruleDisturbsPrettier =
        namesOfRulesThatDisturbPrettier.includes(ruleName);

      if (!ruleDisturbsPrettier) {
        return false;
      }

      return ruleEntry.severity !== RULE_SEVERITY.OFF.string;
    })
    .map(([ruleName]) => ruleName);
};

module.exports.logDeprecared = (deprecatedRuleNames, pluginName) => {
  loggerUtil.groupLog(`[${pluginName}] Deprecated rules`, () => {
    console.log(deprecatedRuleNames);
  });
};
