'use strict';

const getDisabledRuleSet = (ruleSet, filterCallback) => Object.keys(ruleSet)
  .reduce((acc, ruleName) => {
    if (typeof filterCallback !== 'function' || filterCallback(ruleName)) {
      acc[ruleName] = 'off';
    }
    return acc;
  }, {});

module.exports = {
  getDisabledRuleSet,
};
