'use strict';

const { validateMyOptions, throwUnhandledSchemaError } = require('../_utils');

module.exports.validatePropsFromOneOfSchema = (oneOf, myRuleEntry) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  validateMyOptions(myRuleEntry);

  if (!Array.isArray(myRuleConfig)) {
    throwUnhandledSchemaError(myRuleName);
  }
};
