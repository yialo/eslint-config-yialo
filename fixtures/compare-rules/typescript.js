'use strict';

const { rules: referenceTsRules } = require('@typescript-eslint/eslint-plugin');

const {
  tsRules_extension_nonTypeCheck,
  tsRules_extension_typeCheckOnly,
} = require('../../partials/typescript/extension');
const {
  tsRules_own_nonTypeCheck,
  tsRules_own_typeCheckOnly_nonExtensible,
  tsRules_own_typeCheckOnly_extensibleWithJest,
} = require('../../partials/typescript/own');
const { compareRuleLists } = require('./utils');

const referenceTsRuleNames = Object.keys(referenceTsRules).map(
  (ruleName) => `@typescript-eslint/${ruleName}`,
);

const deprecaredReferenceTsRuleNames = Object.entries(referenceTsRules)
  .filter((ruleEntry) => {
    const rule = ruleEntry[1];
    return rule.meta.deprecated;
  })
  .map(([ruleName]) => `@typescript-eslint/${ruleName}`);

const myTsRuleNames = Object.keys({
  ...tsRules_own_nonTypeCheck,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
  ...tsRules_extension_nonTypeCheck,
  ...tsRules_extension_typeCheckOnly,
});

compareRuleLists(
  {
    deprecatedRuleNames: deprecaredReferenceTsRuleNames,
    myRuleNames: myTsRuleNames,
    referenceRuleNames: referenceTsRuleNames,
  },
  { pluginName: 'typescript' },
);
