'use strict';

const { getDisabledRuleSet } = require('../utils');
const { coreRules_extensibleShared_OFF } = require('./extensible-shared');

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

const coreRules_extensibleWithBabel_full_OFF = {
  ...coreRules_extensibleShared_OFF,
  ...coreRules_extensibleWithBabel_only_OFF,
};

module.exports = {
  /**
   * Usage:
   * - For full core ruleset composition in abstract mixin
   * - For full Babel-extensible core ruleset composition in Babel partial
   */
  coreRules_extensibleWithBabel_only,

  /**
   * Usage:
   * - Disables all Babel-extensible core rules in Babel mixin
   */
  coreRules_extensibleWithBabel_full_OFF,
};
