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
const {
  compareRuleLists,
  getDeprecatedReferenceRuleNames,
} = require('./_utils');

const referenceRuleEntries = [...referenceRulesIterator];

const referenceRuleNames = referenceRuleEntries.map(([ruleName]) => ruleName);

const deprecatedRuleNames =
  getDeprecatedReferenceRuleNames(referenceRuleEntries);

const myRuleNames = Object.keys({
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
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'core',
  },
);
