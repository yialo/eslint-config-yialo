'use strict';

const { rules: referenceRules } = require('eslint-plugin-jsx-a11y');

const { jsxA11yRules } = require('../../partials/jsx-a11y');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceRuleNames = Object.keys(referenceRules).map((ruleName) => `jsx-a11y/${ruleName}`);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  'jsx-a11y',
);

const myRuleNames = Object.keys(jsxA11yRules);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'jsx-a11y',
  },
);
