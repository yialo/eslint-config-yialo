'use strict';

const { isObject, loggerUtil, SchemaTyped, SCHEMA_TYPE } = require('../_utils');

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

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntry) => {
  const myRuleName = myRuleEntry.name;

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
    return {};
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
          `rule: ${myRuleName}, unknown type detected in anyOf element ${JSON.stringify(
            anyOfSchema.value,
            null,
            2,
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
    const matchedOneSchema = objectOneOfSchemas.find((oneOfSchema) => {
      const schemaOptionNames = Object.keys(oneOfSchema.value.properties);

      const allRefIncluded = schemaOptionNames.every((schemaOptionName) =>
        myOptionNames.includes(schemaOptionName),
      );

      return allRefIncluded;
    });

    if (!matchedOneSchema) {
      loggerUtil.throwRuleConfigError(myRuleName);
      return {};
    }

    // TODO: handle more than one object config element
    if (myRuleName === 'prefer-destructuring') {
      console.log(
        loggerUtil.colorize.bgRed({
          myRuleName,
          matchedOneSchema,
        }),
      );
    }
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
