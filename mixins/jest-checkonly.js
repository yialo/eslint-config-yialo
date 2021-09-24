'use strict';

const { jestRules_extension_typeCheckOnly } = require('../partials/jest');

const { tsRules_typeCheckOnly_extensibleWithJest_OFF } = require('../partials/typescript');


module.exports = {
  rules: {
    ...tsRules_typeCheckOnly_extensibleWithJest_OFF,
    ...jestRules_extension_typeCheckOnly,
  },
};
