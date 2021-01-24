'use strict';

const { getDisabledRuleSet } = require('../utils');

const sharedExtensibleCoreRules = {
  'no-invalid-this': 'off',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
    },
  ],
  'object-curly-spacing': ['error', 'always'],
  'semi': ['error', 'always'],
};

const sharedExtensibleCoreRulesReset = getDisabledRuleSet(sharedExtensibleCoreRules);

module.exports = {
  sharedExtensibleCoreRules,
  sharedExtensibleCoreRulesReset,
};
