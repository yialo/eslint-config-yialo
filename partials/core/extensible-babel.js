'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  sharedExtensibleCoreRules,
  sharedExtensibleCoreRulesReset,
} = require('./extensible-shared');

const babelExtensibleRules = {
  ...sharedExtensibleCoreRules,
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
};

const babelResetRules = {
  ...sharedExtensibleCoreRulesReset,
  ...getDisabledRuleSet(babelExtensibleRules),
};

module.exports = {
  babelExtensibleRules,
  babelResetRules,
};
