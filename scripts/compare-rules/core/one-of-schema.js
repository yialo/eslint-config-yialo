'use strict';

const {
  isObject,
  throwRuleConfigError,
  throwUnhandledSchemaError,
} = require('../_utils');

const getMyOptionsForOneOfSchema = ([myRuleName, myRuleConfig]) => {
  const result = {
    mainOption: null,
    optionNames: [],
  };

  if (!Array.isArray(myRuleConfig)) {
    return;
  }

  const [_severity, firstPart, secondPart] = myRuleConfig;

  const firstPartIsObject = isObject(firstPart);
  const firstPartIsStringOrNumber =
    typeof firstPart === 'string' || typeof firstPart === 'number';

  const secondPartIsObject = isObject(secondPart);
  const secondPartIsAbsent = secondPart === undefined;

  if (firstPartIsStringOrNumber) {
    result.mainOption = firstPart;

    if (secondPartIsObject) {
      result.optionNames = Object.keys(secondPart);
    } else if (!secondPartIsAbsent) {
      throwRuleConfigError(myRuleName);
    }
  } else if (firstPartIsObject && secondPartIsObject) {
    result.mainOption = firstPart;
    result.optionNames = Object.keys(secondPart);
  } else if (firstPartIsObject && secondPartIsAbsent) {
    result.optionNames = Object.keys(firstPart);
  } else if (firstPartIsObject && !secondPartIsAbsent) {
    throwRuleConfigError(myRuleName);
  }

  return result;
};

module.exports.validateMyPropsForRuleWithOneOfSchema = (myRuleEntry, oneOf) => {
  const [myRuleName, myRuleConfig] = myRuleEntry;

  if (!Array.isArray(myRuleConfig)) {
    throwUnhandledSchemaError(myRuleName);
  }

  const myOptions = getMyOptionsForOneOfSchema(myRuleEntry);

  const objectSchemas = oneOf.filter(({ type }) => type === 'object');

  console.log({ objectSchemas, myOptions });

  if (objectSchemas.length > 0 && !isObject(myOptions.mainOption)) {
    throw new Error(`Rule: ${myRuleName} should be configured more verbosely`);
  }
};
