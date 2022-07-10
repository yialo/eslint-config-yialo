'use strict';

/*
NOTE: it's no need to add disabled rules to internal ESLint config
because of it has no extension configs
*/

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
