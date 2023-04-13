'use strict';

const { rules: referenceRules } = require('eslint-plugin-jest');

const {
  jestRules,
  jestTsRules_typeCheckOnly,
} = require('../../../src/partials/jest');
const {
  detectDeprecatedRulesInMyOnes,
  detectExtraneousRulesInMyOnes,
  detectMissingRules,
  detectRulesInterfereWithPrettierInMyOnes,
  prepareMyRuleGroups,
  prepareReferenceRuleGroups,
  getTopLevelSchemaType,
  isSeverityDefinedAsNumber,
  logDeprecared,
  logExtraneous,
  loggerUtil,
  logMissing,
  logPrettierInterferences,
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
} = require('../lib');

const PLUGIN_NAME = 'eslint-plugin-jest';

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`jest/${ruleName}`, rule.meta],
);

const {
  deprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleNames,
  referenceRuleNames,
} = prepareReferenceRuleGroups(referenceRuleMetaEntries);

const myRules = {
  ...jestRules,
  ...jestTsRules_typeCheckOnly,
};

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
  referenceRuleNames,
);
logExtraneous(extraneousRuleNames, PLUGIN_NAME);

const namesOfMyRulesNeedToBeDisabledBecauseOfPrettier =
  detectRulesInterfereWithPrettierInMyOnes(myRuleEntries);
logPrettierInterferences(
  namesOfMyRulesNeedToBeDisabledBecauseOfPrettier,
  PLUGIN_NAME,
);

const myRulesNeedClarification = myRuleEntries.reduce(
  (output, myRuleEntryTuple) => {
    const [myRuleName, myRuleEntry] = myRuleEntryTuple;

    const nextOutput = (() => {
      const severityDefinedAsNumber = isSeverityDefinedAsNumber(
        myRuleEntry.severity,
      );

      if (severityDefinedAsNumber) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleName}: severity should be defined as string, not number`,
        );

        return null;
      }

      if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
        return null;
      }

      const metaEntry = nonDeprecatedReferenceRuleMetaEntries.find(
        ([refRuleName]) => refRuleName === myRuleName,
      );

      if (!metaEntry) {
        return null;
      }

      loggerUtil.throwUnhandledSchemaError(myRuleName);
    })();

    return nextOutput ? { ...output, ...nextOutput } : output;
  },
  {},
);

loggerUtil.groupLog(`[${PLUGIN_NAME}] Rules that need clarificaiton`, () => {
  console.log(Object.entries(myRulesNeedClarification));
});
