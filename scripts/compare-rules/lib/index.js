'use strict';

const { isObject, loggerUtil } = require('./shared');

const { MyRuleEntryNormalized } = require('./entities/my-rule-entry');
const {
  TOP_LEVEL_SCHEMA_TYPE,
  getTopLevelSchemaType,
} = require('./entities/top-level-schema');
const {
  RULE_SEVERITY,
  isSeverityDefinedAsNumber,
  isSeverityOff,
} = require('./entities/severity');
const { SCHEMA_TYPE, TypedSchema } = require('./entities/schema');

const {
  detectDeprecatedRulesInMyOnes,
  logDeprecared,
} = require('./features/detect-deprecated-rules');
const {
  detectExtraneousRulesInMyOnes,
  logExtraneous,
} = require('./features/detect-extraneous-rules');
const {
  detectMissingRules,
  logMissing,
} = require('./features/detect-missing-rules');
const {
  detectRulesInterfereWithPrettierInMyOnes,
  logPrettierInterferences,
} = require('./features/detect-prettier-interference');
const {
  findObjectSchemaAbsentOptionsNames,
} = require('./features/find-object-schema-absent-options');
const { prepareMyRuleGroups } = require('./features/prepare-my-rule-groups');
const {
  prepareReferenceRuleGroups,
} = require('./features/prepare-reference-rule-groups');

Object.assign(module.exports, {
  detectDeprecatedRulesInMyOnes,
  detectExtraneousRulesInMyOnes,
  detectMissingRules,
  prepareMyRuleGroups,
  detectRulesInterfereWithPrettierInMyOnes,
  findObjectSchemaAbsentOptionsNames,
  prepareReferenceRuleGroups,
  getTopLevelSchemaType,
  isObject,
  isSeverityDefinedAsNumber,
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
