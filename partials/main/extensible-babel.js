'use strict';

const { getDisabledRuleSet } = require('../utils');

const babelExtensibleRules = {
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
