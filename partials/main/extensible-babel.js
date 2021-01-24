'use strict';

const { getDisabledRuleSet } = require('../utils');
const { commonExtensibleRules, commonResetRules } = require('./extensible-common');

const babelExtensibleRules = {
  ...commonExtensibleRules,
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
};

const babelResetRules = {
  ...commonResetRules,
  ...getDisabledRuleSet(babelExtensibleRules),
};

module.exports = {
  babelExtensibleRules,
  babelResetRules,
};
