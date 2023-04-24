'use strict';

const { loggerUtil } = require('../shared');

const RULE_SEVERITY = {
  OFF: {
    number: 0,
    string: 'off',
  },
  WARN: {
    number: 1,
    string: 'warn',
  },
  ERROR: {
    number: 2,
    string: 'error',
  },
};

const isSeverityOff = (severity) =>
  severity === RULE_SEVERITY.OFF.number ||
  severity === RULE_SEVERITY.OFF.string;

const isSeverityDefinedAsNumber = (severity) => {
  return (
    severity === RULE_SEVERITY.OFF.number ||
    severity === RULE_SEVERITY.WARN.number ||
    severity === RULE_SEVERITY.ERROR.number
  );
};

const reportSeverityDefinedAsNumber = (myRuleName) => {
  loggerUtil.logAndThrow(
    `Rule ${myRuleName}: severity should be defined as string, not number`,
  );
};

Object.assign(module.exports, {
  RULE_SEVERITY,
  isSeverityOff,
  isSeverityDefinedAsNumber,
  reportSeverityDefinedAsNumber,
});
