'use strict';

const { rules: referenceRules } = require('@babel/eslint-plugin');

const { babelRules: myRules } = require('../../../src/partials/babel');
const {
  detectDeprecatedRulesInMyOnes,
  detectExtraneousRulesInMyOnes,
  detectMissingRules,
  detectRulesInterfereWithPrettierInMyOnes,
  prepareMyRuleGroups,
  prepareReferenceRuleGroups,
  logDeprecared,
  logExtraneous,
  logMissing,
  logPrettierInterferences,
} = require('../lib');

const PLUGIN_NAME = '@babel/eslint-plugin';

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`@babel/${ruleName}`, rule.meta],
);

const { deprecatedReferenceRuleMetaEntries, nonDeprecatedReferenceRuleNames } =
  prepareReferenceRuleGroups(referenceRuleMetaEntries);

const { myRuleEntries, myRuleNames } = prepareMyRuleGroups(myRules);

const myRulesNeedToBeRemovedBecauseOfDeprecation =
  detectDeprecatedRulesInMyOnes(
    myRuleNames,
    deprecatedReferenceRuleMetaEntries,
  );
logDeprecared(myRulesNeedToBeRemovedBecauseOfDeprecation, PLUGIN_NAME);

const missingRuleNames = detectMissingRules(
  myRuleNames,
  nonDeprecatedReferenceRuleNames,
);
logMissing(missingRuleNames, PLUGIN_NAME);

const extraneousRuleNames = detectExtraneousRulesInMyOnes(
  myRuleNames,
  nonDeprecatedReferenceRuleNames,
);
logExtraneous(extraneousRuleNames, PLUGIN_NAME);

const namesOfMyRulesNeedToBeDisabledBecauseOfPrettier =
  detectRulesInterfereWithPrettierInMyOnes(myRuleEntries);
logPrettierInterferences(
  namesOfMyRulesNeedToBeDisabledBecauseOfPrettier,
  PLUGIN_NAME,
);
