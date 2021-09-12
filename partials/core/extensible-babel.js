'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  coreRules_extensibleWithBabelAndTs,
  coreRules_extensibleWithBabelAndTs_RESET,
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

const coreRules_extensibleWithBabel_only_RESET = getDisabledRuleSet(
  coreRules_extensibleWithBabel_only,
);

const coreRules_extensibleWithBabel = {
  ...coreRules_extensibleWithBabelAndTs,
  ...coreRules_extensibleWithBabel_only,
};

const coreRules_extensibleWithBabel_RESET = {
  ...coreRules_extensibleWithBabelAndTs_RESET,
  ...coreRules_extensibleWithBabel_only_RESET,
};

module.exports = {
  coreRules_extensibleWithBabel,
  coreRules_extensibleWithBabel_RESET,
};
