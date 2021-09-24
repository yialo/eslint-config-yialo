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
   * - For full core ruleset composition in abstract mixin
   * - For full Babel-extensible core ruleset composition in Babel partial
   */
  coreRules_extensibleWithBabel_only,

  /**
   * Usage:
   * - For disabled full Babel-extensible core ruleset composition in Babel mixin
   */
  coreRules_extensibleWithBabel_only_OFF,
};
