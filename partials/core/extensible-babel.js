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

const coreRules_extensibleWithBabel = {
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithBabel_only,
};

const coreRules_extensibleWithBabel_OFF = {
  ...coreRules_extensibleShared_OFF,
  ...coreRules_extensibleWithBabel_only_OFF,
};

module.exports = {
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithBabel_OFF,
  coreRules_extensibleWithBabel_only,
};
