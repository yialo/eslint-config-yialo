'use strict';

const colorize = require('colors');

const THROW_ON_UNEXPECTED = true;

const loggerUtil = {};
loggerUtil.colorize = colorize;

loggerUtil.groupLog = (groupName, log) => {
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
loggerUtil.logAndThrow = logAndThrow;

loggerUtil.throwRuleConfigError = (myRuleName) => {
  const message = `Unexpectedly configured rule: ${myRuleName}`;
  logAndThrow(message);
};

loggerUtil.throwUnhandledSchemaError = (myRuleName) => {
  const message = `Unhandled schema for rule: ${myRuleName}`;
  logAndThrow(message);
};

const stringifyMultiline = (value) => JSON.stringify(value, null, 2);
loggerUtil.stringifyMultiline = stringifyMultiline;

module.exports.loggerUtil = loggerUtil;
