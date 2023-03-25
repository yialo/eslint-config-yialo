'use strict';

const { rules: referenceRules } = require('eslint-plugin-promise');

const { promiseRules } = require('../../partials/promise');
const {
  compareRuleLists,
  getDeprecatedReferenceRuleNames,
} = require('./_utils');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `promise/${ruleName}`,
);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  'promise',
);

const myRuleNames = Object.keys(promiseRules);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'promise',
  },
);
