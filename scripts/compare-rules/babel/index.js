'use strict';

const { rules: referenceRules } = require('@babel/eslint-plugin');

const { babelRules } = require('../../../src/partials/babel');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `@babel/${ruleName}`,
);

const myRuleNames = Object.keys(babelRules);
