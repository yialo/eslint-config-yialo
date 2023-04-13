'use strict';

const {
  findObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../lib');

const MAX_SCHEMA_LENGTH = 3;

module.exports.getAbsentPropsFromTupleTopLevelSchema = (
  tupleSchema,
  myRuleEntry,
) => {
  if (tupleSchema.length === 0) {
    if (myRuleEntry.configuredAsArray) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleEntry.name} should be configured as severity string`,
      );
    }
    return null;
  }

  if (tupleSchema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(
      `Unexpectedly long tuple schema for: ${myRuleEntry.name}`,
    );
    return null;
  }

  const [firstElementSchema, secondElementSchema, thirdElementSchema] =
    Array.from({ length: MAX_SCHEMA_LENGTH }).map(
      (_, i) => new TypedSchema(tupleSchema[i]),
    );

  const schemaTypes = [
    firstElementSchema.type,
    secondElementSchema.type,
    thirdElementSchema.type,
  ];

  if (schemaTypes.some((type) => type === SCHEMA_TYPE.UNKNOWN)) {
    loggerUtil.logAndThrow(
      `Unknows tuple element schema type for: ${
        myRuleEntry.name
      } - ${JSON.stringify(schemaTypes)}`,
    );
    return null;
  }

  if (firstElementSchema.type === SCHEMA_TYPE.ENUM) {
    if (!Object.hasOwn(myRuleEntry.config, 0)) {
      loggerUtil.logAndThrow(
        `Rule ${myRuleEntry.name} should be configured as array with non-empty second element`,
        loggerUtil.colorize.brightGreen,
      );
      return null;
    }

    if (secondElementSchema.type === SCHEMA_TYPE.ENUM) {
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return null;
    }

    if (secondElementSchema.type === SCHEMA_TYPE.ABSENT) {
      return null;
    }

    if (secondElementSchema.type === SCHEMA_TYPE.OBJECT) {
      const myRuleOptions = myRuleEntry.config[1];

      if (!isObject(myRuleOptions)) {
        loggerUtil.logAndThrow(
          `Options config of rule ${myRuleEntry.name} should be object`,
          loggerUtil.colorize.brightMagenta,
        );
        return null;
      }

      return findObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
        myOptions: myRuleOptions,
        refOptions: secondElementSchema.value.properties,
      });
    }
  }

  if (firstElementSchema.type === SCHEMA_TYPE.OBJECT) {
    if (secondElementSchema.type === SCHEMA_TYPE.OBJECT) {
      loggerUtil.logAndThrow(
        `Strange config of rule: ${myRuleEntry.name}`,
        loggerUtil.bgMagenta,
      );
      return null;
    }

    const myRuleOptions = myRuleEntry.config[0];

    if (!isObject(myRuleOptions)) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleEntry.name} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
      return null;
    }

    return findObjectSchemaAbsentOptionsNames({
      ruleName: myRuleEntry.name,
      myOptions: myRuleOptions,
      refOptions: firstElementSchema.value.properties,
    });
  }

  if (firstElementSchema.type === SCHEMA_TYPE.ANY_OF) {
    const anyOfSchemas = firstElementSchema.value.anyOf.map(
      (anyOfRaw) => new TypedSchema(anyOfRaw),
    );

    for (const anyOfSchema of anyOfSchemas) {
      if (anyOfSchema.type === SCHEMA_TYPE.UNKNOWN) {
        loggerUtil.logAndThrow(
          `rule: ${
            myRuleEntry.name
          }, unknown type detected in anyOf element ${loggerUtil.stringifyMultiline(
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
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return null;
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${
          myRuleEntry.name
        }: first config element should be object but it is ${typeof myFirstConfigElement}`,
      );
      return null;
    }

    if (objectAnyOfSchemas.length === 1) {
      return findObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
        myOptions: myFirstConfigElement,
        refOptions: objectAnyOfSchemas[0].value.properties,
      });
    }
  }

  if (firstElementSchema.type === SCHEMA_TYPE.ONE_OF) {
    if (secondElementSchema.type !== SCHEMA_TYPE.ABSENT) {
      const mySecondConfigElement = myRuleEntry.config[1];

      if (!mySecondConfigElement) {
        loggerUtil.logAndThrow(
          `Rule ${myRuleEntry.name}: second config element should be present`,
          loggerUtil.colorize.bgBlue,
        );
        return null;
      }

      if (secondElementSchema.type === SCHEMA_TYPE.OBJECT) {
        return findObjectSchemaAbsentOptionsNames({
          ruleName: myRuleEntry.name,
          myOptions: mySecondConfigElement,
          refOptions: secondElementSchema.value.properties,
          forSecondOptionObject: true,
        });
      }
    }

    const oneOfSchemas = firstElementSchema.value.oneOf.map(
      (onyOfRaw) => new TypedSchema(onyOfRaw),
    );

    const objectOneOfSchemas = oneOfSchemas.filter(
      (oneOf) => oneOf.type === SCHEMA_TYPE.OBJECT,
    );

    if (objectOneOfSchemas.length === 0) {
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return null;
    }

    const myFirstConfigElement = myRuleEntry.config[0];

    if (!isObject(myFirstConfigElement)) {
      loggerUtil.logAndThrow(
        `Rule ${
          myRuleEntry.name
        }: first config element should be object but it is ${typeof myFirstConfigElement}`,
        loggerUtil.colorize.bgCyan,
      );
      return null;
    }

    if (objectOneOfSchemas.length === 1) {
      return findObjectSchemaAbsentOptionsNames({
        ruleName: myRuleEntry.name,
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
      loggerUtil.throwRuleConfigError(myRuleEntry.name);
      return null;
    }

    return null;
  }

  loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
};
