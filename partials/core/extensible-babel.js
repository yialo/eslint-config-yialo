'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  coreRules_extensibleWithBabelAndTs,
  coreRules_extensibleWithBabelAndTs_OFF,
} = require('./extensible-babel-ts');

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
  ...coreRules_extensibleWithBabelAndTs,
  ...coreRules_extensibleWithBabel_only,
};

const coreRules_extensibleWithBabel_OFF = {
  ...coreRules_extensibleWithBabelAndTs_OFF,
  ...coreRules_extensibleWithBabel_only_OFF,
};

module.exports = {
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithBabel_OFF,
};
