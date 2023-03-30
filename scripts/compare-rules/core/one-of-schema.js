'use strict';

const { getMyOptions } = require('../_utils');

module.exports.checkAbsentPropsFromOneOfSchema = (oneOf, myRuleEntry) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  const myOptions = getMyOptions(myRuleEntry);

  if (!Array.isArray(myRuleConfig)) {
    throw new Error(
      `Rule: ${myRuleName} with options ${myOptions}, unexpected oneOf schema: ${oneOf}`,
    );
  }
};
