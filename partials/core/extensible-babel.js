'use strict';

const { getDisabledRuleSet } = require('../utils');

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

module.exports = {
  /**
   * Usage:
   * - For full core ruleset composition in abstract config mixin
   */
  coreRules_extensibleWithBabel_only,

  /**
   * Usage:
   * - Disables Babel-only extensible core rules in Babel config mixin
   */
  coreRules_extensibleWithBabel_only_OFF,
};
