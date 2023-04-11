'use strict';

module.exports.getReferenceRuleGroups = (referenceRuleMetaEntries) => {
  const deprecatedReferenceRuleMetaEntries = [];
  const nonDeprecatedReferenceRuleMetaEntries = [];

  referenceRuleMetaEntries.forEach((ruleEntry) => {
    const [_, meta] = ruleEntry;
    if (meta.deprecated) {
      deprecatedReferenceRuleMetaEntries.push(ruleEntry);
    } else {
      nonDeprecatedReferenceRuleMetaEntries.push(ruleEntry);
    }
  });

  const nonDeprecatedReferenceRuleNames =
    nonDeprecatedReferenceRuleMetaEntries.map(([name]) => name);

  const referenceRuleNames = referenceRuleMetaEntries.map(([name]) => name);

  return {
    deprecatedReferenceRuleMetaEntries,
    nonDeprecatedReferenceRuleMetaEntries,
    nonDeprecatedReferenceRuleNames,
    referenceRuleNames,
  };
};
