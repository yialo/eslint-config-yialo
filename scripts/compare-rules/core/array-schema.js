'use strict';

const {
  isObject,
  loggerUtil,
  SchemaTyped,
  SCHEMA_TYPE,
  MyRuleEntryNormalized,
} = require('../_utils');

const MAX_SCHEMA_LENGTH = 3;

const getObjectSchemaAbsentOptionsNames = ({
  ruleName,
  myOptions,
  refOptions,
}) => {
  const myOptionNames = Object.keys(myOptions);
  const schemaOptionNames = Object.keys(refOptions);
  const absentOptions = schemaOptionNames.filter(
    (refOptName) => !myOptionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [ruleName]: absentOptions };
};

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

      return getObjectSchemaAbsentOptionsNames({
        ruleName: myRuleName,
        myOptions: myRuleOptions,
        refOptions: secondSchemaElement.value.properties,
      });
    }
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.OBJECT) {
    if (secondSchemaElement.type === SCHEMA_TYPE.OBJECT) {
      loggerUtil.logAndThrow(
        `Strange config of rule: ${myRuleName}`,
        loggerUtil.bgMagenta,
      );
    }

    const myRuleOptions = myRuleEntry.config[0];

    if (!isObject(myRuleOptions)) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleName} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
    }

    return getObjectSchemaAbsentOptionsNames({
      ruleName: myRuleName,
      myOptions: myRuleOptions,
      refOptions: firstSchemaElement.value.properties,
    });
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ANY_OF) {
    const anyOfSchemas = firstSchemaElement.value.anyOf.map(
      (anyOfRaw) => new SchemaTyped(anyOfRaw),
    );

    for (const anyOfSchema of anyOfSchemas) {
      if (anyOfSchema.type === SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `rule: ${myRuleName}, unknown type detected in anyOf element ${JSON.stringify(
            anyOfSchema.value,
            null,
            2,
          )}`,
          loggerUtil.colorize.brightYellow,
        );
      }
    }

    const objectAnyOfSchemas = anyOfSchemas.filter(
      (anyOf) => anyOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectAnyOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName}: first config element should be object but it is ${typeof myFirstConfigElement}`,
      );
    }

    const hasTheOnlyObjectAnyOfSchema = objectAnyOfSchemas.length === 1;
    if (hasTheOnlyObjectAnyOfSchema) {
      return getObjectSchemaAbsentOptionsNames({
        ruleName: myRuleName,
        myOptions: myFirstConfigElement,
        refOptions: objectAnyOfSchemas[0].value.properties,
      });
    }
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
