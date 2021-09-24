'use strict';

const { coreRules_extensibleWithTs_typeCheckOnly_OFF } = require('../partials/core/extensible-ts');
const { coreRules_tsCompat_typeCheckOnly_OFF } = require('../partials/core/ts-compat');

const { tsRules_extension_typeCheckOnly } = require('../partials/typescript/extension');
const {
  tsRules_own_typeCheckOnly_nonExtensible,
  tsRules_own_typeCheckOnly_extensibleWithJest,
} = require('../partials/typescript/own');


const coreRules_extensibleWithTs_typeCheckOnly_full_OFF = {
  ...coreRules_tsCompat_typeCheckOnly_OFF,
  ...coreRules_extensibleWithTs_typeCheckOnly_OFF,
};

const tsRules_typeCheckOnly_full = {
  ...tsRules_extension_typeCheckOnly,
  ...tsRules_own_typeCheckOnly_nonExtensible,
  ...tsRules_own_typeCheckOnly_extensibleWithJest,
};


module.exports = {
  rules: {
    ...coreRules_extensibleWithTs_typeCheckOnly_full_OFF,
    ...tsRules_typeCheckOnly_full,
  },
};
