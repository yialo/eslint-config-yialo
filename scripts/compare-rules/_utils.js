'use strict';

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const throwRuleConfigError = (myRuleName) => {
  throw new Error(`Unexpectedly configured rule: ${myRuleName}`);
};

module.exports.throwUnhandledSchemaError = (myRuleName) => {
  throw new Error(`Unhandled schema for rule: ${myRuleName}`);
};

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

const validateMyOptions = ([myRuleName, myRuleConfig], result = {}) => {
  if (!Array.isArray(myRuleConfig)) {
    return;
  }

  const [_severity, firstPart, secondPart, ...partsRest] = myRuleConfig;

  // FIXME: add case for long properties list

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
      const firstPartType = typeof firstPart;

      const allPartsHasTheSameType =
        typeof secondPart === firstPartType &&
        (partsRest.length === 0 ||
          partsRest.every((part) => typeof part === firstPartType));

      if (allPartsHasTheSameType) {
        result.mainOption = [firstPart, secondPart, ...partsRest];
      } else {
        throwRuleConfigError(myRuleName);
      }
    }
  } else if (firstPartIsObject && secondPartIsObject) {
    result.mainOption = firstPart;
    result.optionNames = Object.keys(secondPart);
  } else if (firstPartIsObject && secondPartIsAbsent) {
    result.optionNames = Object.keys(firstPart);
  } else if (firstPartIsObject && !secondPartIsAbsent) {
    throwRuleConfigError(myRuleName);
  }
};
module.exports.validateMyOptions = validateMyOptions;

module.exports.getMyOptions = (myRuleEntry) => {
  const result = {
    mainOption: null,
    optionNames: [],
  };

  validateMyOptions(myRuleEntry, result);

  return result;
};
