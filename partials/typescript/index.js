'use strict';

const { getDisabledRuleSet } = require('../utils');

const { regularExtenderTsRules, typeCheckExtenderTsRules } = require('./extended');
const {
  regularOwnTsRules,
  typeCheckRules: enabledOwnTypeCheckRules,
} = require('./own');

const disabledExtendedRegularRules = getDisabledRuleSet(regularExtenderTsRules);
const disabledExtendedTypeCheckRules = getDisabledRuleSet(typeCheckExtenderTsRules);
const disabledOwnRegularRules = getDisabledRuleSet(regularOwnTsRules);
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
    ...regularOwnTsRules,
  },
  enabledTypeCheckRules: {
    ...typeCheckExtenderTsRules,
    ...enabledOwnTypeCheckRules,
  },
};
