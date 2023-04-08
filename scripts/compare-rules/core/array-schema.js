'use strict';

const { TypedSchema, SCHEMA_TYPE, loggerUtil } = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

const MAX_SCHEMA_LENGTH = 3;

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  if (schema.length === 0) {
    return {};
  }

  if (schema.length > MAX_SCHEMA_LENGTH) {
    loggerUtil.logAndThrow(`Unexpectedly long array schema for: ${myRuleName}`);
  }

  const [firstSchemaElement, secondSchemaElement, thirdSchemaElement] =
    Array.from({ length: MAX_SCHEMA_LENGTH }).map((_, i) => {
      const schemaEl = schema[i];
      return new TypedSchema(schemaEl);
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

  const firstSchemaElementIsEnum = firstSchemaElement.type === SCHEMA_TYPE.ENUM;
  const secondSchemaElementIsEnum =
    secondSchemaElement.type === SCHEMA_TYPE.ENUM;

  if (firstSchemaElementIsEnum) {
    console.log(
      loggerUtil.colorize.cyan('First element is enum for:', myRuleName),
    );

    if (secondSchemaElementIsEnum) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
    }
  }

  const refOptionNames = schema.reduce((optNamesCollected, schemaElement) => {
    const optNames = getOptionNamesFromSchemaElement(schemaElement);
    return optNamesCollected.concat(optNames);
  }, []);

  // console.log({ myRuleName, myOptions, refOptionNames });

  // const absentOptions = refOptionNames.filter(
  //   (refOptName) => !myOptions.optionNames.includes(refOptName),
  // );

  // if (!absentOptions.length) {
  //   return {};
  // }

  // return { [myRuleName]: absentOptions };

  return {};
};
