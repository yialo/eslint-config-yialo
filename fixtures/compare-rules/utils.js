'use strict';

module.exports.compareRuleLists = (
  { myRuleNames, referenceRuleNames, deprecatedRuleNames = [] },
  { pluginName },
) => {
  const nonDeprecatedReferenceRuleNames = referenceRuleNames
    .filter((ruleName) => !deprecatedRuleNames.includes(ruleName));

  const missingRuleNames = nonDeprecatedReferenceRuleNames
    .filter((ruleName) => !myRuleNames.includes(ruleName));

  const extraneousRuleNames = myRuleNames
    .filter((ruleName) => !nonDeprecatedReferenceRuleNames.includes(ruleName));

  console.group(pluginName);
  console.log('missingRuleNames', missingRuleNames.length, missingRuleNames);
  console.log('extraneousRuleNames', extraneousRuleNames.length, extraneousRuleNames);
  console.groupEnd(pluginName);
};
