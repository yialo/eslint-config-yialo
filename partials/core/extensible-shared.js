'use strict';

const { getDisabledRuleSet } = require('../utils');

const coreRules_extensibleShared = {
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

const coreRules_extensibleShared_OFF = getDisabledRuleSet(
  coreRules_extensibleShared,
);

module.exports = {
  coreRules_extensibleShared,
  coreRules_extensibleShared_OFF,
};
