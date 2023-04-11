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
  detectDeprecatedRulesInMyOnes,
  detectExtraneousRulesInMyOnes,
  detectMissingRules,
  detectRulesInterfereWithPrettierInMyOnes,
  getMyRuleGroups,
  getReferenceRuleGroups,
  getTopLevelSchemaType,
  logDeprecared,
  logExtraneous,
  loggerUtil,
  logMissing,
  logPrettierInterferences,
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
} = require('../_utils');
const {
  getAbsentPropsFromTupleTopLevelSchema,
} = require('./tuple-top-level-schema');

const PLUGIN_NAME = '@typescript-eslint/eslint-plugin';

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`@typescript-eslint/${ruleName}`, rule.meta],
);

const {
  deprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleNames,
} = getReferenceRuleGroups(referenceRuleMetaEntries);

const myRules = {
  ...tsRules_own_nonTypeCheck,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
  ...tsRules_extension_nonTypeCheck,
  ...tsRules_extension_typeCheckOnly,
};

const { myRuleEntryTuples, myRuleNames } = getMyRuleGroups(myRules);

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

const myRulesInterfereWithPrettier =
  detectRulesInterfereWithPrettierInMyOnes(myRuleEntryTuples);
logPrettierInterferences(myRulesInterfereWithPrettier, PLUGIN_NAME);

const myRulesNeedClarification = myRuleEntryTuples.reduce(
  (output, myRuleEntryTuple) => {
    const [myRuleName, myRuleEntry] = myRuleEntryTuple;

    const nextOutput = (() => {
      if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
        return null;
      }

      const metaEntry = nonDeprecatedReferenceRuleMetaEntries.find(
        ([refRuleName]) => refRuleName === myRuleName,
      );

      if (!metaEntry) {
        return null;
      }

      const { schema: topLevelSchema } = metaEntry[1];
      const topLevelSchemaType = getTopLevelSchemaType(topLevelSchema);

      if (topLevelSchemaType === TOP_LEVEL_SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `Unknown rule schema type for: ${myRuleName}`,
          loggerUtil.colorize.bgRed,
        );
      }

      if (topLevelSchemaType === TOP_LEVEL_SCHEMA_TYPE.TUPLE) {
        return getAbsentPropsFromTupleTopLevelSchema(
          topLevelSchema,
          myRuleEntry,
        );
      }

      if (topLevelSchemaType === TOP_LEVEL_SCHEMA_TYPE.RECORD) {
        const recordIsPseudoTuple = Object.keys(topLevelSchema).every(
          (propName) => Number.isInteger(Number(propName)),
        );

        if (recordIsPseudoTuple) {
          const preudoTupleAsTuple = Object.values(topLevelSchema).map(
            (elementSchema) => elementSchema,
          );

          return getAbsentPropsFromTupleTopLevelSchema(
            preudoTupleAsTuple,
            myRuleEntry,
          );
        }

        loggerUtil.throwUnhandledSchemaError(myRuleName);
      }

      return null;
    })();

    return nextOutput ? { ...output, ...nextOutput } : output;
  },
  {},
);

loggerUtil.groupLog(`[${PLUGIN_NAME}] Rules that need clarificaiton`, () => {
  console.log(Object.entries(myRulesNeedClarification));
});
