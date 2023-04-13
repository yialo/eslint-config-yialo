'use strict';

const { rules: referenceRules } = require('eslint-plugin-react-hooks');

const { reactHooksRules } = require('../../../src/partials/react-hooks');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `react-hooks/${ruleName}`,
);

const myRuleNames = Object.keys(reactHooksRules);
