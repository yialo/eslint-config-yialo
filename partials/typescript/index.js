'use strict';

const {
  regularRules: extendedRegularRules,
  typeCheckRules: extendedTypeCheckRules,
} = require('./extended');
const {
  regularRules: ownRegularRules,
  typeCheckRules: ownTypeCheckRules,
} = require('./own');

module.exports = {
  tsRules: {
    ...extendedRegularRules,
    ...extendedTypeCheckRules,
    ...ownRegularRules,
    ...ownTypeCheckRules,
  },
};
