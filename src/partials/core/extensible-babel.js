'use strict';

const { getDisabledRuleSet } = require('../_utils');

const coreRules_extensibleWithBabel_only = {
  'new-cap': [
    'error',
    {
      capIsNew: false,
      capIsNewExceptionPattern: undefined,
      capIsNewExceptions: [],
      newIsCap: true,
      newIsCapExceptionPattern: undefined,
      newIsCapExceptions: [],
      properties: true,
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
