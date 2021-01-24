'use strict';

const { getDisabledRuleSet } = require('../utils');

const commonExtensibleRules = {
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

const commonResetRules = getDisabledRuleSet(commonExtensibleRules);

module.exports = {
  commonExtensibleRules,
  commonResetRules,
};
