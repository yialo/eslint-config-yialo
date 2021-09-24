'use strict';

const { babelRules } = require('../partials/babel');

const { coreRules_extensibleWithBabel_only_OFF } = require('../partials/core/extensible-babel');
const { coreRules_extensibleShared_OFF } = require('../partials/core/extensible-shared');

const coreRules_extensibleWithBabel_full_OFF = {
  ...coreRules_extensibleShared_OFF,
  ...coreRules_extensibleWithBabel_only_OFF,
};

module.exports = {
  parser: '@babel/eslint-parser',
  rules: {
    ...coreRules_extensibleWithBabel_full_OFF,
    ...babelRules,
  },
};
