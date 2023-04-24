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
  getTopLevelSchemaType,
  isSeverityDefinedAsNumber,
  isSeverityOff,
  logDeprecared,
  logExtraneous,
  loggerUtil,
  logMissing,
  logPrettierInterferences,
  prepareMyRuleGroups,
  prepareReferenceRuleGroups,
  reportSeverityDefinedAsNumber,
  reportDisabledRuleConfiguredAsArray,
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
} = require('../lib');
const {
  getAbsentPropsFromTupleTopLevelSchema,
} = require('./tuple-top-level-schema');
const {
  getAbsentPropsFromRecordTopLevelSchema,
} = require('./record-top-level-schema');

const PLUGIN_NAME = '@typescript-eslint/eslint-plugin';

const referenceRuleMetaEntries = Object.entries(referenceRules).map(
  ([ruleName, rule]) => [`@typescript-eslint/${ruleName}`, rule.meta],
);

const {
  deprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleNames,
} = prepareReferenceRuleGroups(referenceRuleMetaEntries);

const myRules = {
  ...tsRules_own_nonTypeCheck,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
  ...tsRules_extension_nonTypeCheck,
  ...tsRules_extension_typeCheckOnly,
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
  nonDeprecatedReferenceRuleNames,
);
logExtraneous(extraneousRuleNames, PLUGIN_NAME);

const myRulesInterfereWithPrettier =
  detectRulesInterfereWithPrettierInMyOnes(myRuleEntries);
logPrettierInterferences(myRulesInterfereWithPrettier, PLUGIN_NAME);

const myRulesNeedClarification = myRuleEntries.reduce((output, myRuleEntry) => {
  const nextOutput = (() => {
    if (isSeverityDefinedAsNumber(myRuleEntry.severity)) {
      reportSeverityDefinedAsNumber(myRuleEntry.name);
      return null;
    }

    if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
      if (myRuleEntry.configuredAsArray) {
        reportDisabledRuleConfiguredAsArray(myRuleEntry.name);
      }
      return null;
    }

    const metaEntry = nonDeprecatedReferenceRuleMetaEntries.find(
      ([refRuleName]) => refRuleName === myRuleEntry.name,
    );

    if (!metaEntry) {
      return null;
    }

    const { schema: topLevelSchema } = metaEntry[1];
    const topLevelSchemaType = getTopLevelSchemaType(topLevelSchema);

    if (topLevelSchemaType === TOP_LEVEL_SCHEMA_TYPE.UNKNOWN) {
      loggerUtil.logAndThrow(
        `Unknown rule schema type for: ${myRuleEntry.name}`,
        loggerUtil.colorize.bgRed,
      );
    }

    if (topLevelSchemaType === TOP_LEVEL_SCHEMA_TYPE.TUPLE) {
      return getAbsentPropsFromTupleTopLevelSchema(topLevelSchema, myRuleEntry);
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

      return getAbsentPropsFromRecordTopLevelSchema(
        topLevelSchema,
        myRuleEntry,
      );
    }

    loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
  })();

  return nextOutput ? { ...output, ...nextOutput } : output;
}, {});

loggerUtil.groupLog(`[${PLUGIN_NAME}] Rules that need clarificaiton`, () => {
  console.log(Object.entries(myRulesNeedClarification));
});

const CHECK_RECOMMENDED = false;

if (CHECK_RECOMMENDED) {
  const recommendedAsStrictRefRuleNames = nonDeprecatedReferenceRuleMetaEntries
    .filter(([_, meta]) => meta.docs.recommended === 'strict')
    .map(([name]) => name);

  const namesOfMyDisabledRulesThatAreRecommendedAsStrict = myRuleEntries
    .filter(
      (myRuleEntry) =>
        recommendedAsStrictRefRuleNames.includes(myRuleEntry.name) &&
        isSeverityOff(myRuleEntry.severity),
    )
    .map(([name]) => name);

  loggerUtil.groupLog(
    `[${PLUGIN_NAME}] Names of my rules that are disabled but recommended as strict`,
    () => {
      console.log(namesOfMyDisabledRulesThatAreRecommendedAsStrict);
    },
  );

  const recommendedAsErrorRefRuleNames = nonDeprecatedReferenceRuleMetaEntries
    .filter(([_, meta]) => meta.docs.recommended === 'error')
    .map(([name]) => name);

  const namesOfMyDisabledRulesThatAreRecommendedAsError = myRuleEntries
    .filter(
      (myRuleEntry) =>
        recommendedAsErrorRefRuleNames.includes(myRuleEntry.name) &&
        isSeverityOff(myRuleEntry.severity),
    )
    .map(([name]) => name);

  loggerUtil.groupLog(
    `[${PLUGIN_NAME}] Names of my rules that are disabled but recommended as error`,
    () => {
      console.log(namesOfMyDisabledRulesThatAreRecommendedAsError);
    },
  );
}
