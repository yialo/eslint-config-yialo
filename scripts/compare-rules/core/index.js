'use strict';

const referenceRulesIterator = require('../../../node_modules/eslint/lib/rules');
const {
  getTopLevelSchemaType,
  loggerUtil,
  MyRuleEntryNormalized,
  TOP_LEVEL_SCHEMA_TYPE,
  RULE_SEVERITY,
  SCHEMA_TYPE,
  TypedSchema,
  getNamesOfMyRulesDisturbPrettier,
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

const referenceRuleMetaEntries = [...referenceRulesIterator].map(
  ([name, rule]) => [name, rule.meta],
);

const deprecatedReferenceRuleMetaEntries = referenceRuleMetaEntries.filter(
  ([_, meta]) => !!meta.deprecated,
);
const nonDeprecatedReferenceRuleMetaEntries = referenceRuleMetaEntries.filter(
  ([_, meta]) => !meta.deprecated,
);
const nonDeprecatedReferenceRuleNames =
  nonDeprecatedReferenceRuleMetaEntries.map(([name]) => name);

const myFullConfigRaw = {
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_extensibleWithTs_typeCheckOnly,
  ...coreRules_nonExtensible,
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
};

const myRuleEntryTuples = Object.entries(myFullConfigRaw).map((ruleEntry) => {
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

loggerUtil.groupLog('[eslint core] Deprecated rules', () => {
  console.log(myRulesNeedToBeRemovedBecauseOfDeprecation);
});

const missingCoreRuleNames = nonDeprecatedReferenceRuleNames.filter(
  (name) => !myRuleNames.includes(name),
);

loggerUtil.groupLog('[eslint core] Missing rules', () => {
  console.log(missingCoreRuleNames);
});

const extraneousRuleNames = myRuleNames.filter(
  (name) => !nonDeprecatedReferenceRuleNames.includes(name),
);

loggerUtil.groupLog('[eslint core] Extraneous rules', () => {
  console.log(extraneousRuleNames);
});

const namesOfMyRulesNeedToBeDisabledBecauseOfPrettier =
  getNamesOfMyRulesDisturbPrettier(myRuleEntryTuples);

loggerUtil.groupLog(
  '[eslint core] Rules need to be disabled because of Prettier',
  () => {
    console.log(namesOfMyRulesNeedToBeDisabledBecauseOfPrettier);
  },
);

const myRulesNeedClarification = myRuleEntryTuples.reduce(
  (output, myRuleEntryTuple) => {
    const [myRuleName, myRuleEntry] = myRuleEntryTuple;

    const getNextOutput = () => {
      if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
        return;
      }

      const metaEntry = nonDeprecatedReferenceRuleMetaEntries.find(
        ([refRuleName]) => refRuleName === myRuleName,
      );

      if (!metaEntry) {
        return;
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
          return;
        }

        if (typedSchema.type === SCHEMA_TYPE.ANY_OF) {
          return getAbsentPropsFromAnyOfSchema(typedSchema, myRuleEntry);
        }

        if (typedSchema.type === SCHEMA_TYPE.ARRAY) {
          return getAbsentPropsFromArraySchema(typedSchema, myRuleEntry);
        }
      }

      loggerUtil.throwUnhandledSchemaError(myRuleName);
    };

    const nextOutput = getNextOutput();
    return nextOutput ? { ...output, ...nextOutput } : output;
  },
  {},
);

loggerUtil.groupLog('[eslint core] Rules that need clarificaiton', () => {
  console.log(Object.entries(myRulesNeedClarification));
});
