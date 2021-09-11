'use strict';

const { coreRules_extensibleWithTs_typeCheckOnly_RESET } = require('../partials/core');
const { tsRules_typeCheckOnly } = require('../partials/typescript');

module.exports = {
  rules: {
    ...coreRules_extensibleWithTs_typeCheckOnly_RESET,
    ...tsRules_typeCheckOnly,
  },
};
