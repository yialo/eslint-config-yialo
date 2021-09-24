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
   * - For Babel plugin rules
   */
  coreRules_extensibleWithBabel_full,

  /**
   * Usage:
   * - Disables extensible core rules in Babel config mixin
   */
  coreRules_extensibleWithBabel_full_OFF,

  /**
   * Usage:
   * - In full core ruleset definition in abstract config mixin
   */
  coreRules_extensibleWithBabel_only,
};
