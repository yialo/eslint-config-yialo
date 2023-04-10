'use strict';

const { rules: referenceRules } = require('@typescript-eslint/eslint-plugin');

const {
  tsRules_extension_nonTypeCheck,
  tsRules_extension_typeCheckOnly,
} = require('../../../src/partials/typescript/extension');
const {
  tsRules_own_nonTypeCheck,
  tsRules_own_typeCheckOnly_nonExtensible,
  tsRules_own_typeCheckOnly_extensibleWithJest,
} = require('../../../src/partials/typescript/own');
const {
  loggerUtil,
  MyRuleEntryNormalized,
  getNamesOfMyRulesDisturbPrettier,
  getReferenceRuleGroups,
} = require('../_utils');

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`@typescript-eslint/${ruleName}`, rule.meta],
);

const {
  deprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleNames,
} = getReferenceRuleGroups(referenceRuleMetaEntries);

console.log({
  deprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleNames,
});

const myRules = {
  ...tsRules_own_nonTypeCheck,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
  ...tsRules_extension_nonTypeCheck,
  ...tsRules_extension_typeCheckOnly,
};

const myRuleEntryTuples = Object.entries(myRules).map((ruleEntry) => {
  const ruleName = ruleEntry[0];
  return [ruleName, new MyRuleEntryNormalized(ruleEntry)];
});
const myRuleNames = myRuleEntryTuples.map(([name]) => name);

const myRulesNeedToBeRemovedBecauseOfDeprecation = myRuleNames
  .map((name) => {
    const deprecatedMatch = deprecatedReferenceRuleMetaEntries.find(
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

loggerUtil.groupLog(
  '[@typescript-eslint/eslint-plugin] Deprecated rules',
  () => {
    console.log(myRulesNeedToBeRemovedBecauseOfDeprecation);
  },
);
