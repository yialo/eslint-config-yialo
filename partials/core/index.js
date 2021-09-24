'use strict';

const {
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithBabel_OFF,
  coreRules_extensibleWithBabel_only,
} = require('./extensible-babel');
const { coreRules_extensibleShared } = require('./extensible-shared');
const {
  coreRules_extensibleWithTs,
  coreRules_extensibleWithTs_only,
  coreRules_extensibleWithTs_nonTypeCheck_OFF,
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
} = require('./extensible-ts');
const { coreRules_nonExtensible } = require('./non-extensible');

module.exports = {
  coreRules_nonExtensible,
  coreRules_extensibleShared,
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithBabel_OFF,
  coreRules_extensibleWithBabel_only,
  coreRules_extensibleWithTs,
  coreRules_extensibleWithTs_only,
  coreRules_extensibleWithTs_nonTypeCheck_OFF,
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
};
