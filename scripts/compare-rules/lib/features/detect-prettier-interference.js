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

module.exports.detectRulesInterfereWithPrettierInMyOnes = (myRuleEntries) => {
  return myRuleEntries
    .filter((myRuleEntry) => {
      const ruleInterfereWithPrettier =
        namesOfRulesThatInterfereWithPrettier.includes(myRuleEntry.name);

      if (!ruleInterfereWithPrettier) {
        return false;
      }

      const ruleIsEnabled =
        myRuleEntry.severity !== RULE_SEVERITY.OFF.string &&
        myRuleEntry.severity !== RULE_SEVERITY.OFF.number;

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
