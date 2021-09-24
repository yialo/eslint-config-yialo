'use strict';

const { getDisabledRuleSet } = require('./utils');


const reactHooksRules = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
};

const reactHooksRules_OFF = getDisabledRuleSet(reactHooksRules);


module.exports = {
  reactHooksRules,
  reactHooksRules_OFF,
};
