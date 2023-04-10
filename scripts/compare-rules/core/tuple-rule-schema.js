'use strict';

const {
  isObject,
  getObjectSchemaAbsentOptionsNames,
  loggerUtil,
  SchemaTyped,
  SCHEMA_TYPE,
} = require('../_utils');

const MAX_SCHEMA_LENGTH = 3;

module.exports.getAbsentPropsFromTupleRuleSchema = (
  tupleSchema,
  myRuleEntry,
) => {
  const myRuleName = myRuleEntry.name;

  if (tupleSchema.length === 0) {
    if (myRuleEntry.configuredAsArray) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as severity string`,
      );
    }

    return {};
  }

  if (tupleSchema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(`Unexpectedly long tuple schema for: ${myRuleName}`);
    return {};
  }

  const [firstSchemaElement, secondSchemaElement, thirdSchemaElement] =
    Array.from({ length: MAX_SCHEMA_LENGTH }).map(
      (_, i) => new SchemaTyped(tupleSchema[i]),
    );

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
    return {};
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ENUM) {
    if (!Object.hasOwn(myRuleEntry.config, 0)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as array with non-empty second element`,
        loggerUtil.colorize.brightGreen,
      );
      return {};
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.ENUM) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
      return {};
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.ABSENT) {
      return {};
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.OBJECT) {
      const myRuleOptions = myRuleEntry.config[1];

      if (!isObject(myRuleOptions)) {
        loggerUtil.logAndThrow(
          `Options config of rule ${myRuleName} should be object`,
          loggerUtil.colorize.brightMagenta,
        );
        return {};
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
      return {};
    }

    const myRuleOptions = myRuleEntry.config[0];

    if (!isObject(myRuleOptions)) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleName} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
      return {};
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
          `rule: ${myRuleName}, unknown type detected in anyOf element ${loggerUtil.stringifyMultiline(
            anyOfSchema.value,
          )}`,
          loggerUtil.colorize.brightYellow,
        );
        return {};
      }
    }

    const objectAnyOfSchemas = anyOfSchemas.filter(
      (anyOf) => anyOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectAnyOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
      return {};
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName}: first config element should be object but it is ${typeof myFirstConfigElement}`,
      );
      return {};
    }

    if (objectAnyOfSchemas.length === 1) {
      return getObjectSchemaAbsentOptionsNames({
        ruleName: myRuleName,
        myOptions: myFirstConfigElement,
        refOptions: objectAnyOfSchemas[0].value.properties,
      });
    }
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ONE_OF) {
    if (secondSchemaElement.type !== SCHEMA_TYPE.ABSENT) {
      const mySecondConfigElement = myRuleEntry.config[1];

      if (!mySecondConfigElement) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleName}: second config element should be present`,
          loggerUtil.colorize.bgBlue,
        );
        return {};
      }

      if (secondSchemaElement.type === SCHEMA_TYPE.OBJECT) {
        return getObjectSchemaAbsentOptionsNames({
          ruleName: myRuleName,
          myOptions: mySecondConfigElement,
          refOptions: secondSchemaElement.value.properties,
          forSecondOptionObject: true,
        });
      }
    }

    const oneOfSchemas = firstSchemaElement.value.oneOf.map(
      (onyOfRaw) => new SchemaTyped(onyOfRaw),
    );

    const objectOneOfSchemas = oneOfSchemas.filter(
      (oneOf) => oneOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectOneOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
      return {};
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName}: first config element should be object but it is ${typeof myFirstConfigElement}`,
        loggerUtil.colorize.bgCyan,
      );
      return {};
    }

    if (objectOneOfSchemas.length === 1) {
      return getObjectSchemaAbsentOptionsNames({
        ruleName: myRuleName,
        myOptions: myFirstConfigElement,
        refOptions: objectOneOfSchemas[0].value.properties,
      });
    }

    const myOptionNames = Object.keys(myFirstConfigElement);
    const matchedOneOfSchema = objectOneOfSchemas.find((oneOfSchema) => {
      const schemaOptionNames = Object.keys(oneOfSchema.value.properties);

      const allRefIncluded = schemaOptionNames.every((schemaOptionName) =>
        myOptionNames.includes(schemaOptionName),
      );

      return allRefIncluded;
    });

    if (!matchedOneOfSchema) {
      loggerUtil.throwRuleConfigError(myRuleName);
      return {};
    }

    return {};
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
