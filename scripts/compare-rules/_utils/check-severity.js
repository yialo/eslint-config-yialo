'use strict';

const { RULE_SEVERITY } = require('./config');

module.exports.isSeverityOff = (severity) =>
  severity === RULE_SEVERITY.OFF.number ||
  severity === RULE_SEVERITY.OFF.string;

module.exports.isSeverityDefinedAsNumber = (severity) => {
  return (
    severity === RULE_SEVERITY.OFF.number ||
    severity === RULE_SEVERITY.WARN.number ||
    severity === RULE_SEVERITY.ERROR.number
  );
};
