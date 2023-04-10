'use strict';

module.exports.getReferenceRuleGroups = (referenceRuleMetaEntries) => {
  const deprecatedReferenceRuleMetaEntries = referenceRuleMetaEntries.filter(
    ([_, meta]) => !!meta.deprecated,
  );
  const nonDeprecatedReferenceRuleMetaEntries = referenceRuleMetaEntries.filter(
    ([_, meta]) => !meta.deprecated,
  );
  const nonDeprecatedReferenceRuleNames =
    nonDeprecatedReferenceRuleMetaEntries.map(([name]) => name);

  return {
    deprecatedReferenceRuleMetaEntries,
    nonDeprecatedReferenceRuleMetaEntries,
    nonDeprecatedReferenceRuleNames,
  };
};
