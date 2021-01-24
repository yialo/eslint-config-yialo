'use strict';

const { getDisabledRuleSet } = require('../utils');

const { regularExtenderTsRules, typeCheckExtenderTsRules } = require('./extended');
const { regularOwnTsRules, typeCheckOwnTsRules } = require('./own');

const disabledExtendedRegularRules = getDisabledRuleSet(regularExtenderTsRules);
const disabledExtendedTypeCheckRules = getDisabledRuleSet(typeCheckExtenderTsRules);
const disabledOwnRegularRules = getDisabledRuleSet(regularOwnTsRules);
const disabledOwnTypeCheckRules = getDisabledRuleSet(typeCheckOwnTsRules);

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
    ...typeCheckOwnTsRules,
  },
};
