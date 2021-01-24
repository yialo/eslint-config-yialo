'use strict';

const { getDisabledRuleSet } = require('../utils');

const {
  regularExtenderTsRules,
  typeCheckExtenderTsRules
} = require('./extended');
const {
  regularRules: enabledOwnRegularRules,
  typeCheckRules: enabledOwnTypeCheckRules,
} = require('./own');

const disabledExtendedRegularRules = getDisabledRuleSet(regularExtenderTsRules);
const disabledExtendedTypeCheckRules = getDisabledRuleSet(typeCheckExtenderTsRules);
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
    ...regularExtenderTsRules,
    ...enabledOwnRegularRules,
  },
  enabledTypeCheckRules: {
    ...typeCheckExtenderTsRules,
    ...enabledOwnTypeCheckRules,
  },
};
