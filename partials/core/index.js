'use strict';

const {
  coreRules_extensibleWithBabel_full,
  coreRules_extensibleWithBabel_full_OFF,
  coreRules_extensibleWithBabel_only,
} = require('./extensible-babel');
const { coreRules_extensibleShared } = require('./extensible-shared');
const {
  coreRules_extensibleWithTs_full,
  coreRules_extensibleWithTs_only,
  coreRules_extensibleWithTs_nonTypeCheck_OFF,
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
} = require('./extensible-ts');
const { coreRules_nonExtensible } = require('./non-extensible');

module.exports = {
  coreRules_nonExtensible,
  coreRules_extensibleShared,
  coreRules_extensibleWithBabel_full,
  coreRules_extensibleWithBabel_full_OFF,
  coreRules_extensibleWithBabel_only,
  coreRules_extensibleWithTs_full,
  coreRules_extensibleWithTs_only,
  coreRules_extensibleWithTs_nonTypeCheck_OFF,
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
};
