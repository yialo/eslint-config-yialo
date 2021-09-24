'use strict';

const { coreRules_extensibleWithTs_typeCheckOnly_full_OFF } = require('../partials/core/extensible-ts');
const { tsRules_typeCheckOnly } = require('../partials/typescript');

module.exports = {
  rules: {
    ...coreRules_extensibleWithTs_typeCheckOnly_full_OFF,
    ...tsRules_typeCheckOnly,
  },
};
