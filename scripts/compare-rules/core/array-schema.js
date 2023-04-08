'use strict';

const {
  isObject,
  throwRuleConfigError,
  getSchemaType,
  SCHEMA_TYPE,
  SCHEMA_TYPES,
} = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  if (schema.length === 0) {
    return {};
  }

  if (schema.length > 3) {
    throw new Error('Unexpectedly long array schema for:', myRuleName);
  }

  const [firstSchemaElement, secondSchemaElement, thirdSchemaElement] = schema;

  const firstSchemaElementType = firstSchemaElement
    ? getSchemaType(firstSchemaElement)
    : undefined;
  const secondSchemaElementType = secondSchemaElement
    ? getSchemaType(secondSchemaElement)
    : undefined;
  const thirdSchemaElementType = thirdSchemaElement
    ? getSchemaType(thirdSchemaElement)
    : undefined;

  const schemaTypes = [
    firstSchemaElementType,
    secondSchemaElementType,
    thirdSchemaElementType,
  ];

  if (schemaTypes.some((type) => type === SCHEMA_TYPE.UNKNOWN)) {
    throw new Error(
      `Unknows array element schema type for: ${myRuleName} -`,
      schemaTypes,
    );
  }

  // console.log({
  //   firstSchemaElementType,
  //   secondSchemaElementType,
  //   thirdSchemaElementType,
  // });

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
