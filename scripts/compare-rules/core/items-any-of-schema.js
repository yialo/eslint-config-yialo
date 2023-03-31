'use strict';

const { validateMyOptions, throwUnhandledSchemaError } = require('../_utils');

module.exports.validateMyPropsForRuleWithItemsAnyOfSchema = (myRuleEntry) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  validateMyOptions(myRuleEntry);

  if (!Array.isArray(myRuleConfig)) {
    throwUnhandledSchemaError(myRuleName);
  }
};
