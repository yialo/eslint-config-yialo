'use strict';

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.throwRuleConfigError = (myRuleName) => {
  throw new Error(`Unexpectedly configured rule: ${myRuleName}`);
};

module.exports.throwUnhandledSchemaError = (myRuleName) => {
  throw new Error(`Unhandled schema for rule: ${myRuleName}`);
};
