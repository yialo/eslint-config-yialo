'use strict';

const {
  tsRules_extension_nonTypeCheck,
  tsRules_extension_nonTypeCheck_OFF,
  tsRules_extension_typeCheckOnly,
  tsRules_extension_typeCheckOnly_OFF,
} = require('./extension');

const {
  tsRules_own_nonTypeCheck,
  tsRules_own_nonTypeCheck_OFF,
  tsRules_own_typeCheckOnly_nonExtensible,
  tsRules_own_typeCheckOnly_nonExtensible_OFF,
  tsRules_own_typeCheckOnly_extensibleWithJest,
  tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
} = require('./own');


const tsRules_own_typeCheckOnly_full = {
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
};

const tsRules_own_typeCheckOnly_full_OFF = {
  ...tsRules_own_typeCheckOnly_nonExtensible_OFF,
  ...tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
};


module.exports = {
  tsRules_nonTypeCheck: {
    ...tsRules_extension_nonTypeCheck,
    ...tsRules_own_nonTypeCheck,
  },
  tsRules_typeCheckOnly_BASE: {
    ...tsRules_extension_typeCheckOnly,
    ...tsRules_own_typeCheckOnly_full,
  },
  tsRules_OFF: {
    ...tsRules_extension_nonTypeCheck_OFF,
    ...tsRules_extension_typeCheckOnly_OFF,
    ...tsRules_own_nonTypeCheck_OFF,
    ...tsRules_own_typeCheckOnly_full_OFF,
  },
  tsRules_typeCheckOnly_extensibleWithJest: {
    ...tsRules_own_typeCheckOnly_extensibleWithJest,
  },
  tsRules_typeCheckOnly_extensibleWithJest_OFF: {
    ...tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
  },
};
