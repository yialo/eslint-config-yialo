'use strict';

const { getDisabledRuleSet } = require('../_utils');

// All these rules extends nonTypeCheck TS group only
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
  'object-curly-spacing': [
    'error',
    'always',
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],
  'semi': [
    'error',
    'always',
    {
      omitLastInOneLineBlock: false,
    },
  ],
};

const coreRules_extensibleShared_OFF = getDisabledRuleSet(
  coreRules_extensibleShared,
);

module.exports = {
  coreRules_extensibleShared,
  coreRules_extensibleShared_OFF,
};
