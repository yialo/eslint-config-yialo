'use strict';

const { rules: referenceRules } = require('eslint-plugin-promise');

const { promiseRules } = require('../../../src/partials/promise');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `promise/${ruleName}`,
);

const myRuleNames = Object.keys(promiseRules);
