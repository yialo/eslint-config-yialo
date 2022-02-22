'use strict';

const referenceCoreRules = require('../../node_modules/eslint/lib/rules');

const { coreRules_extensibleWithBabel_only } = require('../../partials/core/extensible-babel');
const { coreRules_extensibleShared } = require('../../partials/core/extensible-shared');
const {
  coreRules_extensibleWithTs_nonTypeCheck,
  coreRules_extensibleWithTs_typeCheckOnly,
} = require('../../partials/core/extensible-ts');
const { coreRules_nonExtensible } = require('../../partials/core/non-extensible');
const {
  coreRules_tsCompat_nonTypeCheck,
  coreRules_tsCompat_typeCheckOnly,
} = require('../../partials/core/ts-compat');
const { compareRuleLists } = require('./utils');

const referenceCoreRuleNames = [...referenceCoreRules].map(([ruleName]) => ruleName);

const deprecatedReferenceCoreRuleNames = [...referenceCoreRules]
  .filter((ruleEntry) => {
    const rule = ruleEntry[1];
    return rule.meta.deprecated;
  })
  .map(([ruleName]) => ruleName);

const myCoreRuleNames = Object.keys({
  ...coreRules_extensibleWithBabel_only,
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_extensibleWithTs_typeCheckOnly,
  ...coreRules_nonExtensible,
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
});

compareRuleLists(
  {
    deprecatedRuleNames: deprecatedReferenceCoreRuleNames,
    myRuleNames: myCoreRuleNames,
    referenceRuleNames: referenceCoreRuleNames,
  },
  'core',
);
