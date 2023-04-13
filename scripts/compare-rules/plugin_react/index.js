'use strict';

const { rules: referenceRules } = require('eslint-plugin-react');

const { reactRules } = require('../../../src/partials/react');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `react/${ruleName}`,
);

const myRuleNames = Object.keys(reactRules);
