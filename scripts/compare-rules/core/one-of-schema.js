'use strict';

const { validateMyOptions } = require('../_utils');

module.exports.validateAbsentPropsFromOneOfSchema = (oneOf, myRuleEntry) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  validateMyOptions(myRuleEntry);

  if (!Array.isArray(myRuleConfig)) {
    throw new Error(`Rule: ${myRuleName}, unexpected oneOf schema: ${oneOf}`);
  }
};
