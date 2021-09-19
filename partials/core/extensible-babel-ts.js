'use strict';

const { getDisabledRuleSet } = require('../utils');

const coreRules_extensibleWithBabelAndTs = {
  'no-invalid-this': 'off',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: true,
    },
  ],
  'object-curly-spacing': ['error', 'always'],
  'semi': ['error', 'always'],
};

const coreRules_extensibleWithBabelAndTs_OFF = getDisabledRuleSet(
  coreRules_extensibleWithBabelAndTs,
);

module.exports = {
  coreRules_extensibleWithBabelAndTs,
  coreRules_extensibleWithBabelAndTs_OFF,
};
