'use strict';

const {
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
  SCHEMA_TYPE,
} = require('./dicts');
const loggerUtil = require('./logger');
const { getNamesOfMyRulesDisturbPrettier } = require('./prettier');

Object.assign(module.exports, {
  loggerUtil,
  getNamesOfMyRulesDisturbPrettier,
  RULE_SEVERITY,
  TOP_LEVEL_SCHEMA_TYPE,
  SCHEMA_TYPE,
});

const isObject = (value) => value !== null && typeof value === 'object';
module.exports.isObject = isObject;

module.exports.getTopLevelSchemaType = (ruleSchema) => {
  if (Array.isArray(ruleSchema)) return TOP_LEVEL_SCHEMA_TYPE.TUPLE;
  if (isObject(ruleSchema)) return TOP_LEVEL_SCHEMA_TYPE.RECORD;
  return TOP_LEVEL_SCHEMA_TYPE.UNKNOWN;
};

const getSchemaType = (schema) => {
  if (!schema) return SCHEMA_TYPE.ABSENT;
  if (Object.keys(schema).length === 0) return SCHEMA_TYPE.EMPTY;
  if (schema.const) return SCHEMA_TYPE.CONST;
  if (schema.enum) return SCHEMA_TYPE.ENUM;
  if (schema.allOf) return SCHEMA_TYPE.ALL_OF;
  if (schema.anyOf) return SCHEMA_TYPE.ANY_OF;
  if (schema.oneOf) return SCHEMA_TYPE.ONE_OF;
  if (schema.not) return SCHEMA_TYPE.NOT;
  if (schema.if) return SCHEMA_TYPE.IF_THEN_ELSE;
  if (schema.type === 'object' || schema.properties) return SCHEMA_TYPE.OBJECT;
  if (schema.type === 'string') return SCHEMA_TYPE.STRING;
  if (schema.type === 'integer') return SCHEMA_TYPE.NUMBER;
  if (schema.type === 'array') return SCHEMA_TYPE.ARRAY;
  return SCHEMA_TYPE.UNKNOWN;
};

class TypedSchema {
  constructor(schema) {
    this.type = getSchemaType(schema);
    this.value = schema;
  }
}
module.exports.TypedSchema = TypedSchema;

class MyRuleEntryNormalized {
  constructor(myRuleEntryRaw) {
    const [myRuleName, myRuleConfigRaw] = myRuleEntryRaw;
    const configIsArray = Array.isArray(myRuleConfigRaw);

    this.name = myRuleName;
    this.severity = configIsArray ? myRuleConfigRaw[0] : myRuleConfigRaw;
    this.config = configIsArray ? myRuleConfigRaw.slice(1) : [];
    this.configuredAsArray = configIsArray;
  }
}
module.exports.MyRuleEntryNormalized = MyRuleEntryNormalized;

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
