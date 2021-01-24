'use strict';

const { getDisabledRuleSet } = require('../utils');

const { regularExtenderTsRules, typeCheckExtenderTsRules } = require('./extended');
const { regularOwnTsRules, typeCheckOwnTsRules } = require('./own');

const regularExtenderTsRulesReset = getDisabledRuleSet(regularExtenderTsRules);
const typeCheckExtenderTsRulesReset = getDisabledRuleSet(typeCheckExtenderTsRules);
const regularOwnTsRulesReset = getDisabledRuleSet(regularOwnTsRules);
const typeCheckOwnTsRulesReset = getDisabledRuleSet(typeCheckOwnTsRules);

module.exports = {
  nonTypeCheckTsRules: {
    ...regularExtenderTsRules,
    ...regularOwnTsRules,
  },
  typeCheckOnlyTsRules: {
    ...typeCheckExtenderTsRules,
    ...typeCheckOwnTsRules,
  },
  tsRulesReset: {
    ...regularExtenderTsRulesReset,
    ...typeCheckExtenderTsRulesReset,
    ...regularOwnTsRulesReset,
    ...typeCheckOwnTsRulesReset,
  },
};
