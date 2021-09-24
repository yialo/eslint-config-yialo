'use strict';

const { getDisabledRuleSet } = require('../utils');

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
  'object-curly-spacing': ['error', 'always'],
  'semi': ['error', 'always'],
};

const coreRules_extensibleShared_OFF = getDisabledRuleSet(
  coreRules_extensibleShared,
);

module.exports = {
  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   * - For full Babel-extensible core ruleset composition in Babel-extensible core partial
   * - For full TS-extensible core ruleset composition in TS-related core partial
   */
  coreRules_extensibleShared,

  /**
   * Usage:
   * - For disabled full Babel-extensible core ruleset composition in Babel config mixin
   * - For disabled non-typecheck TS-extensible core ruleset composition in TS-related core partial
   */
  coreRules_extensibleShared_OFF,
};
