'use strict';

const { coreRules_extensibleWithTs_typeCheckOnly_OFF } = require('../partials/core/extensible-ts');
const { coreRules_tsCompat_typeCheckOnly_OFF } = require('../partials/core/ts-compat');

const { tsRules_typeCheckOnly_BASE } = require('../partials/typescript');


const coreRules_extensibleWithTs_typeCheckOnly_full_OFF = {
  ...coreRules_tsCompat_typeCheckOnly_OFF,
  ...coreRules_extensibleWithTs_typeCheckOnly_OFF,
};


module.exports = {
  rules: {
    ...coreRules_extensibleWithTs_typeCheckOnly_full_OFF,
    ...tsRules_typeCheckOnly_BASE,
  },
};
