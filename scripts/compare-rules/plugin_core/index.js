'use strict';

const referenceRulesIterator = require('../../../node_modules/eslint/lib/rules');
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

const {
  getAbsentPropsFromRecordTopLevelSchema,
} = require('./record-top-level-schema');
const {
  getAbsentPropsFromTupleTopLevelSchema,
} = require('./tuple-top-level-schema');

const {
  coreRules_extensibleWithBabel_only,
} = require('../../../src/partials/core/extensible-babel');
const {
  coreRules_extensibleShared,
} = require('../../../src/partials/core/extensible-shared');
const {
  coreRules_extensibleWithTs_nonTypeCheck,
  coreRules_extensibleWithTs_typeCheckOnly,
} = require('../../../src/partials/core/extensible-ts');
const {
  coreRules_nonExtensible,
} = require('../../../src/partials/core/non-extensible');
const {
  coreRules_tsCompat_nonTypeCheck,
  coreRules_tsCompat_typeCheckOnly,
} = require('../../../src/partials/core/ts-compat');

const PLUGIN_NAME = 'eslint core';

const referenceRuleMetaEntries = [...referenceRulesIterator].map(
  ([name, rule]) => [name, rule.meta],
);

const {
  deprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleMetaEntries,
  nonDeprecatedReferenceRuleNames,
  referenceRuleNames,
} = prepareReferenceRuleGroups(referenceRuleMetaEntries);

const myFullConfigRaw = {
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_extensibleWithTs_typeCheckOnly,
  ...coreRules_nonExtensible,
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
};

const { myRuleEntries, myRuleNames } = prepareMyRuleGroups(myFullConfigRaw);

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

const myRulesNeedClarification = myRuleEntries.reduce((output, myRuleEntry) => {
  const nextOutput = (() => {
    const severityDefinedAsNumber = isSeverityDefinedAsNumber(
      myRuleEntry.severity,
    );

    if (severityDefinedAsNumber) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleEntry.name}: severity should be defined as string, not number`,
      );

      return null;
    }

    if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
      if (myRuleEntry.configuredAsArray) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleEntry.name}: disabled rule should be configured as string, not tuple`,
        );
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
