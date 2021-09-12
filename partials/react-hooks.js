'use strict';

const { getDisabledRuleSet } = require('./utils');

const reactHooksRules = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
};

const reactHooksRules_RESET = getDisabledRuleSet(reactHooksRules);

module.exports = {
  reactHooksRules,
  reactHooksRules_RESET,
};
