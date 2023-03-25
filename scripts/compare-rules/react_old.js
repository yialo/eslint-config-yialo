'use strict';

const { rules: referenceRules } = require('eslint-plugin-react');

const { reactRules } = require('../../src/partials/react');
const {
  compareRuleLists,
  getDeprecatedReferenceRuleNames,
} = require('./_utils');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `react/${ruleName}`,
);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  'react',
);

const myRuleNames = Object.keys(reactRules);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'react',
  },
);
