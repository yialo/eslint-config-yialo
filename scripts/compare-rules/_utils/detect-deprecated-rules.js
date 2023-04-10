'use strict';

const { loggerUtil } = require('./logger');

module.exports.detectDeprecatedRulesInMyOnes = (
  myRuleNames,
  deprecatedRefRuleMetaEntries,
) => {
  return myRuleNames
    .map((name) => {
      const deprecatedMatch = deprecatedRefRuleMetaEntries.find(
        ([deprecatedName]) => name === deprecatedName,
      );

      if (!deprecatedMatch) {
        return null;
      }

      return {
        rule: deprecatedMatch[0],
        replacements: deprecatedMatch[1].replacedBy,
      };
    })
    .filter(Boolean);
};

module.exports.logDeprecared = (deprecatedRuleNames, pluginName) => {
  loggerUtil.groupLog(`[${pluginName}] Deprecated rules`, () => {
    console.log(deprecatedRuleNames);
  });
};
