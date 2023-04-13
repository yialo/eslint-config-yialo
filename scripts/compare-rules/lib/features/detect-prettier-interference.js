'use strict';

const {
  rules: rulesThatInterfereWithPrettier,
} = require('../../../../node_modules/eslint-config-prettier');

const { RULE_SEVERITY, isSeverityOff } = require('../entities/severity');
const { loggerUtil } = require('../shared');

const namesOfRulesThatInterfereWithPrettier = Object.entries(
  rulesThatInterfereWithPrettier,
)
  .filter(([_, severity]) => isSeverityOff(severity))
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

      const ruleIsEnabled =
        ruleEntry.severity !== RULE_SEVERITY.OFF.string &&
        ruleEntry.severity !== RULE_SEVERITY.OFF.number;

      return ruleIsEnabled;
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
