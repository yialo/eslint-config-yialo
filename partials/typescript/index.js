'use strict';

const { getDisabledRuleSet } = require('../utils');

const {
  regularRules: enabledExtendedRegularRules,
  typeCheckRules: enabledExtendedTypeCheckRules,
} = require('./extended');
const {
  regularRules: enabledOwnRegularRules,
  typeCheckRules: enabledOwnTypeCheckRules,
} = require('./own');

const disabledExtendedRegularRules = getDisabledRuleSet(enabledExtendedRegularRules);
const disabledExtendedTypeCheckRules = getDisabledRuleSet(enabledExtendedTypeCheckRules);
const disabledOwnRegularRules = getDisabledRuleSet(enabledOwnRegularRules);
const disabledOwnTypeCheckRules = getDisabledRuleSet(enabledOwnTypeCheckRules);

module.exports = {
  disabledRules: {
    ...disabledExtendedRegularRules,
    ...disabledExtendedTypeCheckRules,
    ...disabledOwnRegularRules,
    ...disabledOwnTypeCheckRules,
  },
  enabledRegularRules: {
    ...enabledExtendedRegularRules,
    ...enabledOwnRegularRules,
  },
  enabledTypeCheckRules: {
    ...enabledExtendedTypeCheckRules,
    ...enabledOwnTypeCheckRules,
  },
};
