'use strict';

const { getDisabledRuleSet } = require('../utils');
const { sharedExtensibleRules, sharedExtensibleRulesReset } = require('./extensible-shared');

const babelExtensibleRules = {
  ...sharedExtensibleRules,
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
};

const babelResetRules = {
  ...sharedExtensibleRulesReset,
  ...getDisabledRuleSet(babelExtensibleRules),
};

module.exports = {
  babelExtensibleRules,
  babelResetRules,
};
