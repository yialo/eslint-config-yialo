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
  'quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true,
    },
  ],
  'semi': ['error', 'always'],
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
};

const commonResetRules = getDisabledRuleSet(commonExtensibleRules);

module.exports = {
  commonExtensibleRules,
  commonResetRules,
};
