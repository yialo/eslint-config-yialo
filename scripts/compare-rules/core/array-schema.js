'use strict';

const {
  loggerUtil,
  SchemaTyped,
  SCHEMA_TYPE,
  MyRuleEntryNormalized,
} = require('../_utils');

const MAX_SCHEMA_LENGTH = 3;

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntryRaw) => {
  const [myRuleName] = myRuleEntryRaw;

  if (schema.length === 0) {
    return {};
  }

  if (schema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(`Unexpectedly long array schema for: ${myRuleName}`);
  }

  const [firstSchemaElement, secondSchemaElement, thirdSchemaElement] =
    Array.from({ length: MAX_SCHEMA_LENGTH }).map((_, i) => {
      const schemaEl = schema[i];
      return new SchemaTyped(schemaEl);
    });

  const schemaTypes = [
    firstSchemaElement.type,
    secondSchemaElement.type,
    thirdSchemaElement.type,
  ];

  if (schemaTypes.some((type) => type === SCHEMA_TYPE.UNKNOWN)) {
    loggerUtil.logAndThrow(
      `Unknows array element schema type for: ${myRuleName} - ${JSON.stringify(
        schemaTypes,
      )}`,
    );
  }

  const myRuleEntry = new MyRuleEntryNormalized(myRuleEntryRaw);

  if (firstSchemaElement.type === SCHEMA_TYPE.ENUM) {
    console.log(
      loggerUtil.colorize.cyan('First element is enum for:', myRuleName),
    );

    if (!Object.hasOwn(myRuleEntry.config, 0)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as array with non-empty second element`,
        loggerUtil.colorize.brightGreen,
      );
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.ENUM) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.EMPTY) {
      return {};
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.OBJECT) {
      const schemaOptionNames = Object.keys(
        secondSchemaElement.value.properties,
      );
      const myOptionNames = Object.keys(myRuleEntry.config[1] ?? {});

      const absentOptions = schemaOptionNames.filter(
        (refOptName) => !myOptionNames.includes(refOptName),
      );

      if (!absentOptions.length) {
        return {};
      }

      return { [myRuleName]: absentOptions };
    }
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
