'use strict';

const referenceRulesIterator = require('../../../node_modules/eslint/lib/rules');

const { groupLog, isObject } = require('../_utils');

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

groupLog('Deprecated core rules', () => {
  console.log(myRulesNeedToRemove);
});

const missingCoreRuleNames = nonDeprecatedReferenceRuleNames.filter(
  (name) => !myRuleNames.includes(name),
);

groupLog('Missing core rules', () => {
  console.log(missingCoreRuleNames);
});

const extraneousRuleNames = myRuleNames.filter(
  (name) => !nonDeprecatedReferenceRuleNames.includes(name),
);

groupLog('Extraneous core rules', () => {
  console.log(extraneousRuleNames);
});

const myRulesNeedClarification = myRuleConfigs.reduce(
  (output, [myRuleName, myRuleConfig]) => {
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

      if (Array.isArray(schema)) {
        const refOptionNames = schema.reduce(
          (optNamesCollected, schemaElement) => {
            if (!isObject(schemaElement)) {
              return optNamesCollected;
            }

            if (schemaElement.type !== 'object') {
              return optNamesCollected;
            }

            return optNamesCollected.concat(
              Object.keys(schemaElement.properties),
            );
          },
          [],
        );

        const myOptionNames = Object.keys(
          Array.isArray(myRuleConfig) ? myRuleConfig.at(-1) : {},
        );

        const absentOptions = refOptionNames.filter(
          (refOptName) => !myOptionNames.includes(refOptName),
        );

        if (!absentOptions.length) {
          return;
        }

        return { [myRuleName]: absentOptions };
      }

      if (!Object.keys(schema).length) {
        return;
      }

      if (schema.anyOf) {
        // TODO: check
        // console.log(`${myRuleName} anyOf:`, schema.anyOf);
        return;
      }

      if (schema.items) {
        // TODO: check
        // console.log(`${myRuleName} schema:`, schema.items);
        return;
      }

      return { [`- STRANGE SCHEMA: rule ${myRuleName}`]: schema };
    };

    const nextOutput = getNextOutput();
    return nextOutput ? { ...output, ...nextOutput } : output;
  },
  {},
);

groupLog('Core rules that need clarificaiton', () => {
  console.log(Object.entries(myRulesNeedClarification));
});
