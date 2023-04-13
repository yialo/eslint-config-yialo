'use strict';

const { rules: referenceRules } = require('eslint-plugin-node');

const { nodeRules } = require('../../../src/partials/node');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleNames) => `node/${ruleNames}`,
);

const myRuleNames = Object.keys(nodeRules);
