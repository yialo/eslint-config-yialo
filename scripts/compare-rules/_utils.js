'use strict';

module.exports.RULE_SEVERITIES = ['error', 'warn', 'off'];

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

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

  const [_severity, firstPart, secondPart] = myRuleConfig;

  const firstPartIsObject = isObject(firstPart);
  const firstPartIsString = typeof firstPart === 'string';
  const secondPartIsObject = isObject(secondPart);
  const secondPartIsAbsent = secondPart === undefined;

  if (firstPartIsString) {
    result.mainOption = firstPart;

    if (secondPartIsObject) {
      result.optionNames = Object.keys(secondPart);
    }
    if (!secondPartIsAbsent) {
      throw new Error(`Rule ${myRuleName}, strange config: ${myRuleConfig}`);
    }
  } else if (firstPartIsObject && secondPartIsObject) {
    result.mainOption = firstPart;
    result.optionNames = Object.keys(secondPart);
  } else if (firstPartIsObject && secondPartIsAbsent) {
    result.optionNames = Object.keys(firstPart);
  } else if (firstPartIsObject && !secondPartIsAbsent) {
    throw new Error(`Rule ${myRuleName}, strange config: ${myRuleConfig}`);
  }

  return result;
};
