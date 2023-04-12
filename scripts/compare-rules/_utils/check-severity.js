'use strict';

const { RULE_SEVERITY } = require('./dicts');

module.exports.isSeverityOff = (severity) =>
  severity === RULE_SEVERITY.OFF.number ||
  severity === RULE_SEVERITY.OFF.string;
