'use strict';

const { isSeverityOff } = require('./check-severity');
const {
  detectDeprecatedRulesInMyOnes,
  logDeprecared,
} = require('./detect-deprecated-rules');
const {
  detectExtraneousRulesInMyOnes,
  logExtraneous,
} = require('./detect-extraneous-rules');
const { detectMissingRules, logMissing } = require('./detect-missing-rules');
const {
  detectRulesInterfereWithPrettierInMyOnes,
  logPrettierInterferences,
} = require('./detect-prettier-interference');
const {
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
  SCHEMA_TYPE,
} = require('./dicts');
const { loggerUtil } = require('./logger');
const { MyRuleEntryNormalized } = require('./my-rule-entry-normalized');
const { getMyRuleGroups } = require('./my-rule-groups');
const { getReferenceRuleGroups } = require('./reference-rule-groups');
const { TypedSchema } = require('./typed-schema');

const isObject = (value) => value !== null && typeof value === 'object';

const getTopLevelSchemaType = (topLevelSchema) => {
  if (Array.isArray(topLevelSchema)) return TOP_LEVEL_SCHEMA_TYPE.TUPLE;
  if (isObject(topLevelSchema)) return TOP_LEVEL_SCHEMA_TYPE.RECORD;
  return TOP_LEVEL_SCHEMA_TYPE.UNKNOWN;
};

const getObjectSchemaAbsentOptionsNames = ({
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

Object.assign(module.exports, {
  detectDeprecatedRulesInMyOnes,
  detectExtraneousRulesInMyOnes,
  detectMissingRules,
  getMyRuleGroups,
  detectRulesInterfereWithPrettierInMyOnes,
  getObjectSchemaAbsentOptionsNames,
  getReferenceRuleGroups,
  getTopLevelSchemaType,
  isObject,
  isSeverityOff,
  logDeprecared,
  logExtraneous,
  loggerUtil,
  logMissing,
  logPrettierInterferences,
  MyRuleEntryNormalized,
  RULE_SEVERITY,
  SCHEMA_TYPE,
  TOP_LEVEL_SCHEMA_TYPE,
  TypedSchema,
});
