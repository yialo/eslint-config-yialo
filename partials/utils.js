'use strict';

const getDisabledRuleSet = (ruleSet) => Object.keys(ruleSet).reduce((acc, ruleName) => {
  acc[ruleName] = 'off';
  return acc;
}, {});


module.exports = {
  getDisabledRuleSet,
};
