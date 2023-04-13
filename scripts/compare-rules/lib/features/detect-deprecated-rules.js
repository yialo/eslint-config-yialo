'use strict';

const { loggerUtil } = require('../shared');

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

      const hasReplacement = deprecatedMatch[1].replacedBy.length > 0;

      return {
        rule: deprecatedMatch[0],
        replacements: hasReplacement ? deprecatedMatch[1].replacedBy : null,
      };
    })
    .filter(Boolean);
};

module.exports.logDeprecared = (deprecatedRuleNames, pluginName) => {
  loggerUtil.groupLog(`[${pluginName}] Deprecated rules`, () => {
    console.log(deprecatedRuleNames);
  });
};
