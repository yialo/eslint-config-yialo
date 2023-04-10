'use strict';

const {
  rules: rulesThatInterfereWithPrettier,
} = require('../../../node_modules/eslint-config-prettier');

const { RULE_SEVERITY } = require('./dicts');
const { loggerUtil } = require('./logger');

const namesOfRulesThatInterfereWithPrettier = Object.entries(
  rulesThatInterfereWithPrettier,
)
  .filter(
    ([_, severity]) =>
      severity === RULE_SEVERITY.OFF.number ||
      severity === RULE_SEVERITY.OFF.string,
  )
  .map(([ruleName]) => ruleName);

module.exports.detectRulesInterfereWithPrettierInMyOnes = (
  myRuleEntryTuples,
) => {
  return myRuleEntryTuples
    .filter(([ruleName, ruleEntry]) => {
      const ruleInterfereWithPrettier =
        namesOfRulesThatInterfereWithPrettier.includes(ruleName);

      if (!ruleInterfereWithPrettier) {
        return false;
      }

      return ruleEntry.severity !== RULE_SEVERITY.OFF.string;
    })
    .map(([ruleName]) => ruleName);
};

module.exports.logPrettierInterferences = (
  namesOfRulesInterfereWithPrettier,
  pluginName,
) => {
  loggerUtil.groupLog(
    `[${pluginName}] Rules need to be disabled because of Prettier`,
    () => {
      console.log(namesOfRulesInterfereWithPrettier);
    },
  );
};
