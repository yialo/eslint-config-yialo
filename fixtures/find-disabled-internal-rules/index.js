'use strict';

const { rules: internalRules } = require('../../.eslintrc.js');

const OFF = 'off';

const disabledInternalRules = Object.entries(internalRules).filter((rule) => {
  const ruleConfig = rule[1];

  if (Array.isArray(ruleConfig)) {
    return ruleConfig[0] === OFF;
  }

  return ruleConfig === OFF;
});

console.log('disabledInternalRules', disabledInternalRules.length, disabledInternalRules);
