'use strict';

const { coreRules_extensibleWithBabel, coreRules_extensibleWithBabel_RESET } = require('./extensible-babel');
const {
  coreRules_extensibleWithTs,
  coreRules_extensibleWithTs_nonTypeCheck_RESET,
  coreRules_extensibleWithTs_typeCheckOnly_RESET,
} = require('./extensible-ts');
const { coreRules_nonExtensible } = require('./non-extensible');

module.exports = {
  coreRules_nonExtensible,
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithBabel_RESET,
  coreRules_extensibleWithTs,
  coreRules_extensibleWithTs_nonTypeCheck_RESET,
  coreRules_extensibleWithTs_typeCheckOnly_RESET,
};
