'use strict';

const { getDisabledRuleSet } = require('../utils');

const { tsRules_extension_regular, tsRules_extension_typeCheck } = require('./extended');
const { tsRules_own_regular, tsRules_own_typeCheck } = require('./own');

const tsRules_extension_regular_RESET = getDisabledRuleSet(tsRules_extension_regular);
const tsRules_extension_typeCheck_RESET = getDisabledRuleSet(tsRules_extension_typeCheck);
const tsRules_own_regular_RESET = getDisabledRuleSet(tsRules_own_regular);
const tsRules_own_typeCheck_RESET = getDisabledRuleSet(tsRules_own_typeCheck);

module.exports = {
  tsRules_nonTypeCheck: {
    ...tsRules_extension_regular,
    ...tsRules_own_regular,
  },
  tsRules_typeCheckOnly: {
    ...tsRules_extension_typeCheck,
    ...tsRules_own_typeCheck,
  },
  tsRules_RESET: {
    ...tsRules_extension_regular_RESET,
    ...tsRules_extension_typeCheck_RESET,
    ...tsRules_own_regular_RESET,
    ...tsRules_own_typeCheck_RESET,
  },
};
