'use strict';

const { coreRules_extensibleWithTs_typeCheckOnly_OFF } = require('../partials/core/extensible-ts');
const { tsRules_typeCheckOnly } = require('../partials/typescript');

module.exports = {
  rules: {
    ...coreRules_extensibleWithTs_typeCheckOnly_OFF,
    ...tsRules_typeCheckOnly,
  },
};
