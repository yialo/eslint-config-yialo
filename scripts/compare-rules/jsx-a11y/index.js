'use strict';

const { rules: referenceRules } = require('eslint-plugin-jsx-a11y');

const { jsxA11yRules } = require('../../../src/partials/jsx-a11y');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `jsx-a11y/${ruleName}`,
);

const myRuleNames = Object.keys(jsxA11yRules);
