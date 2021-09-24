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
   * - As reference to Babel-only extensible core ruleset in Babel partial
   */
  coreRules_extensibleWithBabel_only,

  /**
   * Usage:
   * - For composing of disabled full Babel-extensible core ruleset in Babel mixin
   */
  coreRules_extensibleWithBabel_only_OFF,
};
