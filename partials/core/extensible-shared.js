'use strict';

const { getDisabledRuleSet } = require('../utils');

const sharedExtensibleRules = {
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

const sharedExtensibleRulesReset = getDisabledRuleSet(sharedExtensibleRules);

module.exports = {
  sharedExtensibleRules,
  sharedExtensibleRulesReset,
};
