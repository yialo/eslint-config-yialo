'use strict';

const { rules: referenceRules } = require('@typescript-eslint/eslint-plugin');

const {
  tsRules_extension_nonTypeCheck,
  tsRules_extension_typeCheckOnly,
} = require('../../partials/typescript/extension');
const {
  tsRules_own_nonTypeCheck,
  tsRules_own_typeCheckOnly_nonExtensible,
  tsRules_own_typeCheckOnly_extensibleWithJest,
} = require('../../partials/typescript/own');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `@typescript-eslint/${ruleName}`,
);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  '@typescript-eslint',
);

const myRuleNames = Object.keys({
  ...tsRules_own_nonTypeCheck,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
  ...tsRules_extension_nonTypeCheck,
  ...tsRules_extension_typeCheckOnly,
});

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'typescript',
  },
);
