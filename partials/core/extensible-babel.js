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
  coreRules_extensibleWithBabel_only,

  coreRules_extensibleWithBabel_only_OFF,
};
