'use strict';

// FIXME: remove after debug

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

const myRuleNames = Object.keys({
  ...tsRules_own_nonTypeCheck,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
  ...tsRules_extension_nonTypeCheck,
  ...tsRules_extension_typeCheckOnly,
});

/* TODO: add fine-grained group checks
const createReferenceRuleGroups = () => {
  const reference_ownRuleNames = [];
  const reference_extensionRuleNames = [];
  const reference_nonTypeCheckRuleNames = [];
  const reference_typeCheckRuleNames = [];

  const referenceRuleEntries = Object.entries(referenceRules);

  referenceRuleEntries.forEach(([ruleName, rule]) => {
    const fullRuleName = `@typescript-eslint/${ruleName}`;

    const isExtensionRule = rule.meta.docs.extendsBaseRule;
    if (isExtensionRule) {
      reference_extensionRuleNames.push(fullRuleName);
    } else {
      reference_ownRuleNames.push(fullRuleName);
    }

    const isTypeCheckRule = rule.meta.docs.requiresTypeChecking;
    if (isTypeCheckRule) {
      reference_typeCheckRuleNames.push(fullRuleName);
    } else {
      reference_nonTypeCheckRuleNames.push(fullRuleName);
    }
  });

  return {
    reference_ownRuleNames,
    reference_extensionRuleNames,
    reference_nonTypeCheckRuleNames,
    reference_typeCheckRuleNames,
  };
};

const {
  reference_ownRuleNames,
  reference_extensionRuleNames,
  reference_nonTypeCheckRuleNames,
  reference_typeCheckRuleNames,
} = createReferenceRuleGroups();

console.log('reference_ownRuleNames', reference_ownRuleNames.length, reference_ownRuleNames);
console.log('reference_extensionRuleNames', reference_extensionRuleNames.length, reference_extensionRuleNames);
console.log('reference_nonTypeCheckRuleNames', reference_nonTypeCheckRuleNames.length, reference_nonTypeCheckRuleNames);
console.log('reference_typeCheckRuleNames', reference_typeCheckRuleNames.length, reference_typeCheckRuleNames);
 */
