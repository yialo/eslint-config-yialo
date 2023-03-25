'use strict';

const { rules: referenceRules } = require('eslint-plugin-node');

const { nodeRules } = require('../../src/partials/node');
const {
  compareRuleLists,
  getDeprecatedReferenceRuleNames,
} = require('./_utils');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleNames) => `node/${ruleNames}`,
);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  'node',
);

const myRuleNames = Object.keys(nodeRules);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'node',
  },
);
