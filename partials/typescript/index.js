'use strict';

const {
  regularRules: extensionRegularRules,
  typeCheckRules: extensionTypeCheckRules,
} = require('./extension');
const {
  regularRules: ownRegularRules,
  typeCheckRules: ownTypeCheckRules,
} = require('./own');

module.exports = {
  tsRules: {
    ...extensionRegularRules,
    ...extensionTypeCheckRules,
    ...ownRegularRules,
    ...ownTypeCheckRules,
  },
};
