'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  coreRules_extensibleShared,
  coreRules_extensibleShared_OFF,
} = require('./extensible-shared');

const coreRules_extensibleWithBabel_only = {
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
};

const coreRules_extensibleWithBabel_only_OFF = getDisabledRuleSet(
  coreRules_extensibleWithBabel_only,
);

const coreRules_extensibleWithBabel_full = {
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithBabel_only,
};

const coreRules_extensibleWithBabel_full_OFF = {
  ...coreRules_extensibleShared_OFF,
  ...coreRules_extensibleWithBabel_only_OFF,
};

module.exports = {
  /**
   * Usage:
   * - As reference to core rules for extending in Babel plugin partial
   */
  coreRules_extensibleWithBabel_full,

  /**
   * Usage:
   * - Disables extensible core rules in Babel config mixin
   */
  coreRules_extensibleWithBabel_full_OFF,

  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   */
  coreRules_extensibleWithBabel_only,
};
