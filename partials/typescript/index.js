'use strict';

const { getDisabledRuleSet } = require('../utils');

const { tsRules_extension_nonTypeCheck, tsRules_extension_typeCheckOnly } = require('./extension');
const {
  tsRules_own_nonTypeCheck,
  tsRules_own_typeCheckOnly,
  tsRules_own_typeCheckOnly_extensibleWithJest,
} = require('./own');

const tsRules_extension_regular_OFF = getDisabledRuleSet(tsRules_extension_nonTypeCheck);
const tsRules_extension_typeCheckOnly_OFF = getDisabledRuleSet(tsRules_extension_typeCheckOnly);
const tsRules_own_regular_OFF = getDisabledRuleSet(tsRules_own_nonTypeCheck);
const tsRules_own_typeCheckOnly_OFF = getDisabledRuleSet(tsRules_own_typeCheckOnly);
const tsRules_own_typeCheckOnly_extensibleWithJest_OFF = getDisabledRuleSet(
  tsRules_own_typeCheckOnly_extensibleWithJest,
);


module.exports = {
  tsRules_nonTypeCheck: {
    ...tsRules_extension_nonTypeCheck,
    ...tsRules_own_nonTypeCheck,
  },
  tsRules_typeCheckOnly_BASE: {
    ...tsRules_extension_typeCheckOnly,
    ...tsRules_own_typeCheckOnly,
  },
  tsRules_OFF: {
    ...tsRules_extension_regular_OFF,
    ...tsRules_extension_typeCheckOnly_OFF,
    ...tsRules_own_regular_OFF,
    ...tsRules_own_typeCheckOnly_OFF,
  },
  tsRules_typeCheckOnly_extensibleWithJest: {
    ...tsRules_own_typeCheckOnly_extensibleWithJest,
  },
  tsRules_typeCheckOnly_extensibleWithJest_OFF: {
    ...tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
  },
};
