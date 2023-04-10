'use strict';

const colorize = require('colors');

module.exports.colorize = colorize;

const THROW_ON_UNEXPECTED = true;

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

const logAndThrow = (message, colorizer = colorize.red) => {
  console.log(colorizer(message));
  if (THROW_ON_UNEXPECTED) {
    throw new Error(message);
  }
};
module.exports.logAndThrow = logAndThrow;

module.exports.throwRuleConfigError = (myRuleName) => {
  const message = `Unexpectedly configured rule: ${myRuleName}`;
  logAndThrow(message);
};

module.exports.throwUnhandledSchemaError = (myRuleName) => {
  const message = `Unhandled schema for rule: ${myRuleName}`;
  logAndThrow(message);
};

const stringifyMultiline = (value) => JSON.stringify(value, null, 2);
module.exports.stringifyMultiline = stringifyMultiline;
