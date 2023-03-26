'use strict';

module.exports.RULE_SEVERITIES = ['error', 'warn', 'off'];

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.getMyOptions = (myRuleConfig) => {
  const result = {
    stringOption: null,
    optionNames: [],
  };

  if (!Array.isArray(myRuleConfig)) {
    return result;
  }

  const [_severity, firstPart, secondPart] = myRuleConfig;

  if (isObject(firstPart)) {
    result.optionNames = Object.keys(firstPart);
    return result;
  }
  if (isObject(secondPart)) {
    result.stringOption = firstPart;
    result.optionNames = Object.keys(secondPart);
    return result;
  }
  return result;
};
