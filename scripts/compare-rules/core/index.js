'use strict';

const referenceRulesIterator = require('../../../node_modules/eslint/lib/rules');
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
  SCHEMA_TYPE,
  TOP_LEVEL_SCHEMA_TYPE,
  TypedSchema,
} = require('../_utils');

const {
  getAbsentPropsFromAnyOfSchema,
  getAbsentPropsFromArraySchema,
} = require('./record-rule-schema');
const { getAbsentPropsFromTupleRuleSchema } = require('./tuple-rule-schema');

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
} = getReferenceRuleGroups(referenceRuleMetaEntries);

const myFullConfigRaw = {
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_extensibleWithTs_typeCheckOnly,
  ...coreRules_nonExtensible,
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
};

const { myRuleEntryTuples, myRuleNames } = getMyRuleGroups(myFullConfigRaw);

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
  detectRulesInterfereWithPrettierInMyOnes(myRuleEntryTuples);
logPrettierInterferences(
  namesOfMyRulesNeedToBeDisabledBecauseOfPrettier,
  PLUGIN_NAME,
);

const myRulesNeedClarification = myRuleEntryTuples.reduce(
  (output, myRuleEntryTuple) => {
    const [myRuleName, myRuleEntry] = myRuleEntryTuple;

    const nextOutput = (() => {
      const severityDefinedAsNumber =
        myRuleEntry.severity === RULE_SEVERITY.OFF.number ||
        myRuleEntry.severity === RULE_SEVERITY.WARN.number ||
        myRuleEntry.severity === RULE_SEVERITY.ERROR.number;

      if (severityDefinedAsNumber) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleName}: severity should be defined as string, not number`,
        );

        return null;
      }

      if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
        if (myRuleEntry.configuredAsArray) {
          loggerUtil.logAndThrow(
            `Rule ${myRuleName}: disabled rule should be configured as string, not tuple`,
          );
        }

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
        return getAbsentPropsFromTupleRuleSchema(topLevelSchema, myRuleEntry);
      }

      if (topLevelSchemaType === TOP_LEVEL_SCHEMA_TYPE.RECORD) {
        const typedSchema = new TypedSchema(topLevelSchema);

        if (typedSchema.type === SCHEMA_TYPE.EMPTY) {
          return null;
        }

        if (typedSchema.type === SCHEMA_TYPE.ANY_OF) {
          return getAbsentPropsFromAnyOfSchema(typedSchema, myRuleEntry);
        }

        if (typedSchema.type === SCHEMA_TYPE.ARRAY) {
          return getAbsentPropsFromArraySchema(typedSchema, myRuleEntry);
        }
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
