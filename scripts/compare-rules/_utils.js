'use strict';

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const throwRuleConfigError = ([myRuleName, myRuleConfig]) => {
  throw new Error(`Rule: ${myRuleName}, strange config: ${myRuleConfig}`);
};
module.exports.throwRuleConfigError = throwRuleConfigError;

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.getMyOptions = ([myRuleName, myRuleConfig]) => {
  const result = {
    mainOption: null,
    optionNames: [],
  };

  if (!Array.isArray(myRuleConfig)) {
    return result;
  }

  const [_severity, firstPart, secondPart, ...partsRest] = myRuleConfig;

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

  return result;
};
