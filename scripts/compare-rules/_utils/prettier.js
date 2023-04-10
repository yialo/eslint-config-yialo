'use strict';

const {
  rules: rulesThatDisturbPrettierConfig,
} = require('../../../node_modules/eslint-config-prettier');

const { RULE_SEVERITY } = require('./dicts');

module.exports.namesOfRulesThatDisturbPrettier = Object.entries(
  rulesThatDisturbPrettierConfig,
)
  .filter(
    ([_, severity]) =>
      severity === RULE_SEVERITY.OFF.number ||
      severity === RULE_SEVERITY.OFF.string,
  )
  .map(([ruleName]) => ruleName);
