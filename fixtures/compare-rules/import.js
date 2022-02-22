'use strict';

const { rules: referenceImportRules } = require('eslint-plugin-import');

const { importRules_BASE } = require('../../partials/import');
const { compareRuleLists, getDeprecatedReferenceRuleNames } = require('./utils');

const referenceImportRuleNames = Object.keys(referenceImportRules).map(
  (ruleName) => `import/${ruleName}`,
);

const deprecaredReferenceImportRuleNames = getDeprecatedReferenceRuleNames(
  Object.entries(referenceImportRules),
  'import',
);

const myImportRuleNames = Object.keys(importRules_BASE);

compareRuleLists(
  {
    deprecatedRuleNames: deprecaredReferenceImportRuleNames,
    myRuleNames: myImportRuleNames,
    referenceRuleNames: referenceImportRuleNames,
  },
  { pluginName: 'import' },
);
