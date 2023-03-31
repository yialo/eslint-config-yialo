'use strict';

const colors = require('colors');

const THROW_ON_UNEXPECTED = false;

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.throwRuleConfigError = (myRuleName) => {
  const message = `Unexpectedly configured rule: ${myRuleName}`;
  console.log(colors.red(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};

module.exports.throwUnhandledSchemaError = (myRuleName) => {
  const message = `Unhandled schema for rule: ${myRuleName}`;
  console.log(colors.red(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};
