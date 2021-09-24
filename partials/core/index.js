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
  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   */
  coreRules_nonExtensible,

  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   */
  coreRules_extensibleShared,

  /**
   * Usage:
   * - As reference to core rules for extending in Babel plugin partial
   */
  coreRules_extensibleWithBabel_full,

  /**
   * Usage:
   * - Disables all Babel-extensible core rules in Babel config mixin
   */
  coreRules_extensibleWithBabel_full_OFF,

  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   */
  coreRules_extensibleWithBabel_only,

  /**
   * Usage:
   * - As reference to core rules for extending in TS plugin partial
   */
  coreRules_extensibleWithTs_full,

  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   */
  coreRules_extensibleWithTs_only,

  /**
   * Usage:
   * - Disables all non-typecheck TS-extensible core rules in non-typecheck TS config mixin
   */
  coreRules_extensibleWithTs_nonTypeCheck_OFF,

  /**
   * Usage:
   * - Disables all typecheck-only TS-extensible core rules in typecheck-only TS config mixin
   */
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
};
