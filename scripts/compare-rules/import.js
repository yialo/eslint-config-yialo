'use strict';

const { rules: referenceRules } = require('eslint-plugin-import');

const { importRules_BASE } = require('../../partials/import');
const {
  compareRuleLists,
  getDeprecatedReferenceRuleNames,
} = require('./_utils');

const referenceRuleNames = Object.keys(referenceRules).map(
  (ruleName) => `import/${ruleName}`,
);

const deprecatedRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceRules),
  'import',
);

const myRuleNames = Object.keys(importRules_BASE);

compareRuleLists(
  {
    deprecatedRuleNames,
    myRuleNames,
    referenceRuleNames,
  },
  {
    pluginName: 'import',
  },
);
