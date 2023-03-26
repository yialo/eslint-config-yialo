'use strict';

const referenceRulesIterator = require('../../../node_modules/eslint/lib/rules');

const { groupLog } = require('../_utils');
const { getAbsentPropsFromAnyOfSchema } = require('./any-of-schema');
const { getAbsentPropsFromArraySchema } = require('./array-schema');

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

const myFullConfig = {
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_extensibleWithTs_typeCheckOnly,
  ...coreRules_nonExtensible,
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
};

const myRuleConfigs = Object.entries(myFullConfig);
const myRuleNames = myRuleConfigs.map(([name]) => name);

const myRulesNeedToRemove = myRuleNames
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

const myRulesNeedClarification = myRuleConfigs.reduce((output, myRuleEntry) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  // FIXME: remove after debug
  if (!['semi', 'no-constant-condition'].includes(myRuleName)) {
    return output;
  }

  const getNextOutput = () => {
    if (myRuleConfig === 'off') {
      return;
    }

    const metaEntry = nonDeprecatedReferenceRuleMetas.find(
      ([refRuleName]) => refRuleName === myRuleName,
    );

    if (!metaEntry) {
      return;
    }

    const { schema } = metaEntry[1];

    if (!Object.keys(schema).length) {
      return;
    }

    if (Array.isArray(schema)) {
      return getAbsentPropsFromArraySchema(schema, myRuleEntry);
    }

    if (Array.isArray(schema.anyOf)) {
      return getAbsentPropsFromAnyOfSchema(schema.anyOf, myRuleEntry);
    }

    if (schema.items) {
      // TODO: check
      // console.log(`${myRuleName} schema:`, schema.items);
      return;
    }

    throw new Error(`Rule ${myRuleName}, strange schema: ${schema}`);
  };

  const nextOutput = getNextOutput();
  return nextOutput ? { ...output, ...nextOutput } : output;
}, {});

// FIXME: enable after debug
/* groupLog('Missing core rules', () => {
  console.log(missingCoreRuleNames);
});

groupLog('Extraneous core rules', () => {
  console.log(extraneousRuleNames);
});

groupLog('Deprecated core rules', () => {
  console.log(myRulesNeedToRemove);
}); */

groupLog('Core rules that need clarificaiton', () => {
  console.log(Object.entries(myRulesNeedClarification));
});
