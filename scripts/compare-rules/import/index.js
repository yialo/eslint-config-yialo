'use strict';

const { rules: referenceRules } = require('eslint-plugin-import');

const { importRules_BASE } = require('../../../src/partials/import');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `import/${ruleName}`,
);

const myRuleNames = Object.keys(importRules_BASE);
