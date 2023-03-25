'use strict';

const referenceRulesIterator = require('../../node_modules/eslint/lib/rules');

const {
  coreRules_extensibleWithBabel_only,
} = require('../../src/partials/core/extensible-babel');
const {
  coreRules_extensibleShared,
} = require('../../src/partials/core/extensible-shared');
const {
  coreRules_extensibleWithTs_nonTypeCheck,
  coreRules_extensibleWithTs_typeCheckOnly,
} = require('../../src/partials/core/extensible-ts');
const {
  coreRules_nonExtensible,
} = require('../../src/partials/core/non-extensible');
const {
  coreRules_tsCompat_nonTypeCheck,
  coreRules_tsCompat_typeCheckOnly,
} = require('../../src/partials/core/ts-compat');

const referenceRuleMetas = [...referenceRulesIterator].map(([name, rule]) => [
  name,
  rule.meta,
]);

const deprecatedRuleMetas = referenceRuleMetas.filter(
  ([_, meta]) => !!meta.deprecated,
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
    const deprecatedMatch = deprecatedRuleMetas.find(
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

console.group('Deprecated core rules');
console.log(myRulesNeedToRemove);
console.groupEnd();
