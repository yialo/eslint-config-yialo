'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  sharedExtensibleCoreRules,
  sharedExtensibleCoreRulesReset,
} = require('./extensible-shared');

const babelExtensibleCoreRules = {
  ...sharedExtensibleCoreRules,
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
};

const babelExtensibleCoreRulesReset = {
  ...sharedExtensibleCoreRulesReset,
  ...getDisabledRuleSet(babelExtensibleCoreRules),
};

module.exports = {
  babelExtensibleCoreRules,
  babelExtensibleCoreRulesReset,
};
