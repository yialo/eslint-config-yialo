'use strict';

module.exports.compareRuleLists = (
  { deprecatedRuleNames = [], myRuleNames, referenceRuleNames },
  { pluginName },
) => {
  const nonDeprecatedReferenceRuleNames = referenceRuleNames.filter(
    (ruleName) => !deprecatedRuleNames.includes(ruleName),
  );

  const missingRuleNames = nonDeprecatedReferenceRuleNames.filter(
    (ruleName) => !myRuleNames.includes(ruleName),
  );

  const extraneousRuleNames = myRuleNames.filter(
    (ruleName) => !nonDeprecatedReferenceRuleNames.includes(ruleName),
  );

  console.group(pluginName);
  console.log('missingRuleNames', missingRuleNames.length, missingRuleNames);
  console.log(
    'extraneousRuleNames',
    extraneousRuleNames.length,
    extraneousRuleNames,
  );
  console.groupEnd(pluginName);
};

module.exports.getDeprecatedReferenceRuleNames = (
  referenceRuleEntries,
  ruleNamePrefix = '',
) => {
  const normalizedPrefix = ruleNamePrefix && `${ruleNamePrefix}/`;

  return referenceRuleEntries
    .filter((ruleEntry) => {
      const rule = ruleEntry[1];
      return rule.meta.deprecated;
    })
    .map(([ruleName]) => `${normalizedPrefix}${ruleName}`);
};
