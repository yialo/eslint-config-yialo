'use strict';

// TODO: add Prettier to project

const getDisabledRuleSet = (ruleSet) => Object.keys(ruleSet).reduce((acc, ruleName) => {
  acc[ruleName] = 'off';
  return acc;
}, {});


module.exports = {
  getDisabledRuleSet,
};
