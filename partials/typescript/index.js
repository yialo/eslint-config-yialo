'use strict';

const { getDisabledRuleSet } = require('../utils');

const { tsRules_extension_regular, tsRules_extension_typeCheck } = require('./extension');
const {
  tsRules_own_regular,
  tsRules_own_typeCheck,
  tsRules_own_typeCheck_extensibleWithJest,
} = require('./own');

const tsRules_extension_regular_OFF = getDisabledRuleSet(tsRules_extension_regular);
const tsRules_extension_typeCheck_OFF = getDisabledRuleSet(tsRules_extension_typeCheck);
const tsRules_own_regular_OFF = getDisabledRuleSet(tsRules_own_regular);
const tsRules_own_typeCheck_OFF = getDisabledRuleSet(tsRules_own_typeCheck);
const tsRules_own_typeCheck_extensibleWithJest_OFF = getDisabledRuleSet(
  tsRules_own_typeCheck_extensibleWithJest,
);

module.exports = {
  tsRules_nonTypeCheck: {
    ...tsRules_extension_regular,
    ...tsRules_own_regular,
  },
  tsRules_typeCheckOnly: {
    ...tsRules_extension_typeCheck,
    ...tsRules_own_typeCheck,
  },
  tsRules_OFF: {
    ...tsRules_extension_regular_OFF,
    ...tsRules_extension_typeCheck_OFF,
    ...tsRules_own_regular_OFF,
    ...tsRules_own_typeCheck_OFF,
  },
  tsRules_typeCheckOnly_extensibleWithJest: {
    ...tsRules_own_typeCheck_extensibleWithJest,
  },
  tsRules_typeCheckOnly_extensibleWithJest_OFF: {
    ...tsRules_own_typeCheck_extensibleWithJest_OFF,
  },
};
