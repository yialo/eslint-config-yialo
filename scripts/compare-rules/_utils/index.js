'use strict';

const {
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
  SCHEMA_TYPE,
} = require('./dicts');
const loggerUtil = require('./logger');
const { MyRuleEntryNormalized } = require('./my-rule-entry-normalized');
const { getMyRuleGroups } = require('./my-rule-groups');
const { getNamesOfMyRulesDisturbPrettier } = require('./prettier');
const { getReferenceRuleGroups } = require('./reference-rule-groups');
const { TypedSchema } = require('./typed-schema');

Object.assign(module.exports, {
  getMyRuleGroups,
  getNamesOfMyRulesDisturbPrettier,
  getReferenceRuleGroups,
  loggerUtil,
  RULE_SEVERITY,
  SCHEMA_TYPE,
  TOP_LEVEL_SCHEMA_TYPE,
  TypedSchema,
  MyRuleEntryNormalized,
});

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.getTopLevelSchemaType = (ruleSchema) => {
  if (Array.isArray(ruleSchema)) return TOP_LEVEL_SCHEMA_TYPE.TUPLE;
  if (isObject(ruleSchema)) return TOP_LEVEL_SCHEMA_TYPE.RECORD;
  return TOP_LEVEL_SCHEMA_TYPE.UNKNOWN;
};

module.exports.getObjectSchemaAbsentOptionsNames = ({
  ruleName,
  myOptions,
  refOptions,
  forSecondOptionObject = false,
}) => {
  const myOptionNames = Object.keys(myOptions);
  const schemaOptionNames = Object.keys(refOptions);
  const absentOptions = schemaOptionNames.filter(
    (refOptName) => !myOptionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  if (forSecondOptionObject) {
    return {
      [`${ruleName}, second option object`]: absentOptions,
    };
  }

  return { [ruleName]: absentOptions };
};
