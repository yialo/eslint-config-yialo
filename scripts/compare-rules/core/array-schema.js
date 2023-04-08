'use strict';

const {
  isObject,
  loggerUtil,
  SchemaTyped,
  SCHEMA_TYPE,
  MyRuleEntryNormalized,
} = require('../_utils');

const MAX_SCHEMA_LENGTH = 3;

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntryRaw) => {
  const [myRuleName] = myRuleEntryRaw;

  const myRuleEntry = new MyRuleEntryNormalized(myRuleEntryRaw);

  if (schema.length === 0) {
    if (myRuleEntry.configuredAsArray) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as severity string`,
      );
    }

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

  if (firstSchemaElement.type === SCHEMA_TYPE.ENUM) {
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
      const myRuleOptions = myRuleEntry.config[1];

      if (!isObject(myRuleOptions)) {
        loggerUtil.logAndThrow(
          `Options config of rule ${myRuleName} should be object`,
          loggerUtil.colorize.brightMagenta,
        );
      }

      const myOptionNames = Object.keys(myRuleOptions);
      const schemaOptionNames = Object.keys(
        secondSchemaElement.value.properties,
      );
      const absentOptions = schemaOptionNames.filter(
        (refOptName) => !myOptionNames.includes(refOptName),
      );

      if (!absentOptions.length) {
        return {};
      }

      return { [myRuleName]: absentOptions };
    }
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.OBJECT) {
    const myRuleOptions = myRuleEntry.config[0];

    if (!isObject(myRuleOptions)) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleName} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
    }

    const myOptionNames = Object.keys(myRuleOptions);
    const schemaOptionNames = Object.keys(firstSchemaElement.value.properties);
    const absentOptions = schemaOptionNames.filter(
      (refOptName) => !myOptionNames.includes(refOptName),
    );

    if (!absentOptions.length) {
      return {};
    }

    return { [myRuleName]: absentOptions };
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ANY_OF) {
    console.log(
      loggerUtil.colorize.brightBlue('ANY_OF:', {
        firstSchemaElement,
        myRuleEntry,
      }),
    );
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ONE_OF) {
    console.log(
      loggerUtil.colorize.brightYellow('ONE_OF:', {
        firstSchemaElement,
        myRuleEntry,
      }),
    );
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
