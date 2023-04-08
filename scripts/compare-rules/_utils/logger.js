'use strict';

const colorize = require('colors');

module.exports.colorize = colorize;

const THROW_ON_UNEXPECTED = false;

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

module.exports.throwRuleConfigError = (myRuleName) => {
  const message = `Unexpectedly configured rule: ${myRuleName}`;
  console.log(colorize.red(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};

module.exports.throwUnhandledSchemaError = (myRuleName) => {
  const message = `Unhandled schema for rule: ${myRuleName}`;
  console.log(colorize.red(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};
