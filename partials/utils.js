'use strict';

const createRuleExtender = (extensibleRuleSet) => {
  return (ruleName, injectedOptions) => {
    const rule = extensibleRuleSet[ruleName];

    if (Array.isArray(rule)) {
      const [severity, initialOptions] = rule;

      if (typeof injectedOptions === 'string') {
        return [severity, injectedOptions];
      }

      if (
        initialOptions
        && typeof initialOptions === 'object'
        && injectedOptions
        && typeof injectedOptions === 'object'
      ) {
        return [
          severity,
          {
            ...initialOptions,
            ...injectedOptions,
          },
        ];
      }

      throw new Error(`Can't extend original ESLint rule ${ruleName}, check initial/injected options`);
    }

    if (typeof rule === 'string') {
      return [rule, injectedOptions];
    }

    throw new Error(`Can't extend original ESLint rule ${ruleName}: unexpected rule shape`);
  };
};

const getDisabledRuleSet = (ruleSet) => Object.keys(ruleSet).reduce((acc, ruleName) => {
  acc[ruleName] = 'off';
  return acc;
}, {});

module.exports = {
  createRuleExtender,
  getDisabledRuleSet,
};
