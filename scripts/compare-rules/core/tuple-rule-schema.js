'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
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
    return null;
  }

  if (tupleSchema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(`Unexpectedly long tuple schema for: ${myRuleName}`);
    return null;
  }

  const [firstSchemaElement, secondSchemaElement, thirdSchemaElement] =
    Array.from({ length: MAX_SCHEMA_LENGTH }).map(
      (_, i) => new TypedSchema(tupleSchema[i]),
    );

  const schemaTypes = [
    firstSchemaElement.type,
    secondSchemaElement.type,
    thirdSchemaElement.type,
  ];

  if (schemaTypes.some((type) => type === SCHEMA_TYPE.UNKNOWN)) {
    loggerUtil.logAndThrow(
      `Unknows tuple element schema type for: ${myRuleName} - ${JSON.stringify(
        schemaTypes,
      )}`,
    );
    return null;
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ENUM) {
    if (!Object.hasOwn(myRuleEntry.config, 0)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName} should be configured as array with non-empty second element`,
        loggerUtil.colorize.brightGreen,
      );
      return null;
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.ENUM) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
      return null;
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.ABSENT) {
      return null;
    }

    if (secondSchemaElement.type === SCHEMA_TYPE.OBJECT) {
      const myRuleOptions = myRuleEntry.config[1];

      if (!isObject(myRuleOptions)) {
        loggerUtil.logAndThrow(
          `Options config of rule ${myRuleName} should be object`,
          loggerUtil.colorize.brightMagenta,
        );
        return null;
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
      return null;
    }

    const myRuleOptions = myRuleEntry.config[0];

    if (!isObject(myRuleOptions)) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleName} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
      return null;
    }

    return getObjectSchemaAbsentOptionsNames({
      ruleName: myRuleName,
      myOptions: myRuleOptions,
      refOptions: firstSchemaElement.value.properties,
    });
  }

  if (firstSchemaElement.type === SCHEMA_TYPE.ANY_OF) {
    const anyOfSchemas = firstSchemaElement.value.anyOf.map(
      (anyOfRaw) => new TypedSchema(anyOfRaw),
    );

    for (const anyOfSchema of anyOfSchemas) {
      if (anyOfSchema.type === SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `rule: ${myRuleName}, unknown type detected in anyOf element ${loggerUtil.stringifyMultiline(
            anyOfSchema.value,
          )}`,
          loggerUtil.colorize.brightRed,
        );
        return null;
      }
    }

    const objectAnyOfSchemas = anyOfSchemas.filter(
      (anyOf) => anyOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectAnyOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
      return null;
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName}: first config element should be object but it is ${typeof myFirstConfigElement}`,
      );
      return null;
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
        return null;
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
      (onyOfRaw) => new TypedSchema(onyOfRaw),
    );

    const objectOneOfSchemas = oneOfSchemas.filter(
      (oneOf) => oneOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectOneOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
      return null;
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleName}: first config element should be object but it is ${typeof myFirstConfigElement}`,
        loggerUtil.colorize.bgCyan,
      );
      return null;
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
      return null;
    }

    return null;
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
