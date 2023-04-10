'use strict';

const { rules: referenceRules } = require('@babel/eslint-plugin');

const { babelRules: myRules } = require('../../../src/partials/babel');
const {
  loggerUtil,
  MyRuleEntryNormalized,
  getNamesOfMyRulesDisturbPrettier,
  getReferenceRuleGroups,
} = require('../_utils');

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`@babel/${ruleName}`, rule.meta],
);

const { deprecatedReferenceRuleMetaEntries, nonDeprecatedReferenceRuleNames } =
  getReferenceRuleGroups(referenceRuleMetaEntries);

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

loggerUtil.groupLog('[@babel/eslint-plugin] Deprecated rules', () => {
  console.log(myRulesNeedToBeRemovedBecauseOfDeprecation);
});

const missingCoreRuleNames = nonDeprecatedReferenceRuleNames.filter(
  (name) => !myRuleNames.includes(name),
);

loggerUtil.groupLog('[@babel/eslint-plugin] Missing rules', () => {
  console.log(missingCoreRuleNames);
});

const extraneousRuleNames = myRuleNames.filter(
  (name) => !nonDeprecatedReferenceRuleNames.includes(name),
);

loggerUtil.groupLog('[@babel/eslint-plugin] Extraneous rules', () => {
  console.log(extraneousRuleNames);
});

const namesOfMyRulesNeedToBeDisabledBecauseOfPrettier =
  getNamesOfMyRulesDisturbPrettier(myRuleEntryTuples);

loggerUtil.groupLog(
  '[@babel/eslint-plugin] Rules need to be disabled because of Prettier',
  () => {
    console.log(namesOfMyRulesNeedToBeDisabledBecauseOfPrettier);
  },
);
