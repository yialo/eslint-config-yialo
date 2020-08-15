'use strict';

const { getDisabledRuleSet } = require('../utils');

const babelExtensibleRules = {
  'camelcase': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreGlobals: true,
      ignoreImports: false,
      properties: 'never',
    },
  ],
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
  'object-curly-spacing': ['error', 'always'],
};

const babelResetRules = getDisabledRuleSet(babelExtensibleRules);

module.exports = {
  babelExtensibleRules,
  babelResetRules,
};
