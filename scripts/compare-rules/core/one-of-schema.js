'use strict';

const {
  isObject,
  getMyOptions,
  throwUnhandledSchemaError,
} = require('../_utils');

module.exports.validateMyPropsForRuleWithOneOfSchema = (myRuleEntry, oneOf) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  if (!Array.isArray(myRuleConfig)) {
    throwUnhandledSchemaError(myRuleName);
  }

  const myOptions = getMyOptions(myRuleEntry);

  const objectSchemas = oneOf.filter(({ type }) => type === 'object');

  console.log({ objectSchemas, myOptions });

  if (objectSchemas.length > 0 && !isObject(myOptions[0])) {
    throw new Error(`Rule: ${myRuleName} should be configured more verbosely`);
  }
};
