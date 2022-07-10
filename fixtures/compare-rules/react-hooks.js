'use strict';

const { rules: referenceRules } = require('eslint-plugin-react-hooks');

const { reactHooksRules } = require('../../partials/react-hooks');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./_utils');

const referenceRuleNames = Object.keys(referenceRules).map((ruleName) => `react-hooks/${ruleName}`);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  'react-hooks',
);

const myRuleNames = Object.keys(reactHooksRules);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'react-hooks',
  },
);
