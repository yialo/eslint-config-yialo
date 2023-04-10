'use strict';

const referenceRulesIterator = require('../../../node_modules/eslint/lib/rules');
const {
  getRuleSchemaType,
  loggerUtil,
  MyRuleEntryNormalized,
  RULE_SCHEMA_TYPE,
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

const referenceRuleMetas = [...referenceRulesIterator].map(([name, rule]) => [
  name,
  rule.meta,
]);

const deprecatedReferenceRuleMetas = referenceRuleMetas.filter(
  ([_, meta]) => !!meta.deprecated,
);
const nonDeprecatedReferenceRuleMetas = referenceRuleMetas.filter(
  ([_, meta]) => !meta.deprecated,
);
const nonDeprecatedReferenceRuleNames = nonDeprecatedReferenceRuleMetas.map(
  ([name]) => name,
);

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
    const deprecatedMatch = deprecatedReferenceRuleMetas.find(
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

const missingCoreRuleNames = nonDeprecatedReferenceRuleNames.filter(
  (name) => !myRuleNames.includes(name),
);

const extraneousRuleNames = myRuleNames.filter(
  (name) => !nonDeprecatedReferenceRuleNames.includes(name),
);

const namesOfMyRulesNeedToBeDisabledBecauseOfPrettier =
  getNamesOfMyRulesDisturbPrettier(myRuleEntryTuples);

const myRulesNeedClarification = myRuleEntryTuples.reduce(
  (output, myRuleEntryTuple) => {
    const [myRuleName, myRuleEntry] = myRuleEntryTuple;

    const getNextOutput = () => {
      if (myRuleEntry.severity === RULE_SEVERITY.OFF.string) {
        return;
      }

      const metaEntry = nonDeprecatedReferenceRuleMetas.find(
        ([refRuleName]) => refRuleName === myRuleName,
      );

      if (!metaEntry) {
        return;
      }

      const { schema } = metaEntry[1];
      const ruleSchemaType = getRuleSchemaType(schema);

      if (ruleSchemaType === RULE_SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `Unknown rule schema type for: ${myRuleName}`,
          loggerUtil.colorize.bgRed,
        );
      }

      if (ruleSchemaType === RULE_SCHEMA_TYPE.TUPLE) {
        return getAbsentPropsFromTupleRuleSchema(schema, myRuleEntry);
      }

      if (ruleSchemaType === RULE_SCHEMA_TYPE.RECORD) {
        const typedSchema = new TypedSchema(schema);

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

loggerUtil.groupLog('Missing core rules', () => {
  console.log(missingCoreRuleNames);
});

loggerUtil.groupLog('Extraneous core rules', () => {
  console.log(extraneousRuleNames);
});

loggerUtil.groupLog('Deprecated core rules', () => {
  console.log(myRulesNeedToBeRemovedBecauseOfDeprecation);
});

loggerUtil.groupLog(
  'Core rules need to be disabled because of Prettier',
  () => {
    console.log(namesOfMyRulesNeedToBeDisabledBecauseOfPrettier);
  },
);

loggerUtil.groupLog('Core rules that need clarificaiton', () => {
  console.log(Object.entries(myRulesNeedClarification));
});
