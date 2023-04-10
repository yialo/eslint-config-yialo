'use strict';

const { rules: referenceRules } = require('@babel/eslint-plugin');

const { babelRules: myRules } = require('../../../src/partials/babel');
const {
  detectDeprecatedRulesInMyOnes,
  getMyRuleGroups,
  getNamesOfMyRulesInterfereWithPrettier,
  getReferenceRuleGroups,
  logDeprecared,
  logPrettierInterferences,
  loggerUtil,
} = require('../_utils');

const PLUGIN_NAME = '@babel/eslint-plugin';

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`@babel/${ruleName}`, rule.meta],
);

const { deprecatedReferenceRuleMetaEntries, nonDeprecatedReferenceRuleNames } =
  getReferenceRuleGroups(referenceRuleMetaEntries);

const { myRuleEntryTuples, myRuleNames } = getMyRuleGroups(myRules);

const myRulesNeedToBeRemovedBecauseOfDeprecation =
  detectDeprecatedRulesInMyOnes(
    myRuleNames,
    deprecatedReferenceRuleMetaEntries,
  );

logDeprecared(myRulesNeedToBeRemovedBecauseOfDeprecation, PLUGIN_NAME);

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
  getNamesOfMyRulesInterfereWithPrettier(myRuleEntryTuples);

logPrettierInterferences(
  namesOfMyRulesNeedToBeDisabledBecauseOfPrettier,
  PLUGIN_NAME,
);
