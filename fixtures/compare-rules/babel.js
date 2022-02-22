'use strict';

const { rules: referenceBabelRules } = require('@babel/eslint-plugin');

const { babelRules } = require('../../partials/babel');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceBabelRuleNames = Object.keys(referenceBabelRules).map(
  (ruleName) => `@babel/${ruleName}`,
);

const deprecatedReferenceBabelRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceBabelRules),
  '@babel',
);

const myBabelRuleNames = Object.keys(babelRules);

compareRuleLists(
  {
    deprecatedRuleNames: deprecatedReferenceBabelRuleNames,
    myRuleNames: myBabelRuleNames,
    referenceRuleNames: referenceBabelRuleNames,
  },
  { pluginName: 'babel' },
);
