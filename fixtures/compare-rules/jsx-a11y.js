'use strict';

const { rules: referenceJsxA11yRules } = require('eslint-plugin-jsx-a11y');

const { jsxA11yRules } = require('../../partials/jsx-a11y');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceJsxA11yRuleNames = Object.keys(referenceJsxA11yRules).map(
  (ruleName) => `jsx-a11y/${ruleName}`,
);

const deprecatedReferenceJsxA11yRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceJsxA11yRules),
  'jsx-a11y',
);

const myJsxA11yRuleNames = Object.keys(jsxA11yRules);

compareRuleLists(
  {
    deprecatedRuleNames: deprecatedReferenceJsxA11yRuleNames,
    myRuleNames: myJsxA11yRuleNames,
    referenceRuleNames: referenceJsxA11yRuleNames,
  },
  { pluginName: 'jsx-a11y' },
);
