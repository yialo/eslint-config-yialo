'use strict';

const { jestRules_extension_typeCheckOnly } = require('../partials/jest');
const { tsRules_typeCheckOnly_extensibleWithJest_RESET } = require('../partials/typescript');

module.exports = {
  rules: {
    ...tsRules_typeCheckOnly_extensibleWithJest_RESET,
    ...jestRules_extension_typeCheckOnly,
  },
};
