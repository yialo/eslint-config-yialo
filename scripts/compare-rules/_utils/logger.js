'use strict';

const colorize = require('colors');

module.exports.colorize = colorize;

// FIXME: change to true after debut
const THROW_ON_UNEXPECTED = false;

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

module.exports.stringifyMultiline = (value) => JSON.stringify(value, null, 2);
