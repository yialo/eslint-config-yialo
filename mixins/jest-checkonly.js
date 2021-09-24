'use strict';

const { jestRules_tsExtension_typeCheckOnly } = require('../partials/jest');

const { tsRules_own_typeCheckOnly_extensibleWithJest_OFF } = require('../partials/typescript/own');


module.exports = {
  rules: {
    ...tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
    ...jestRules_tsExtension_typeCheckOnly,
  },
};
