'use strict';

const { throwUnhandledSchemaError } = require('../_utils');

// FIXME: rework
module.exports.validateMyPropsForRuleWithItemsAnyOfSchema = (myRuleEntry) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  if (!Array.isArray(myRuleConfig)) {
    throwUnhandledSchemaError(myRuleName);
  }
};
