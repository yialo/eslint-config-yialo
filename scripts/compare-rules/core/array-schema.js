'use strict';

const { isObject, throwRuleConfigError } = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

const getMyOptionsForArraySchema = ([myRuleName, myRuleConfig]) => {
  const result = {
    mainOption: null,
    optionNames: [],
  };

  if (!Array.isArray(myRuleConfig)) {
    return;
  }

  const [_severity, firstPart, secondPart] = myRuleConfig;

  const firstPartIsObject = isObject(firstPart);
  const firstPartIsStringOrNumber =
    typeof firstPart === 'string' || typeof firstPart === 'number';

  const secondPartIsObject = isObject(secondPart);
  const secondPartIsAbsent = secondPart === undefined;

  if (firstPartIsStringOrNumber) {
    result.mainOption = firstPart;

    if (secondPartIsObject) {
      result.optionNames = Object.keys(secondPart);
    } else if (!secondPartIsAbsent) {
      throwRuleConfigError(myRuleName);
    }
  } else if (firstPartIsObject && secondPartIsObject) {
    result.mainOption = firstPart;
    result.optionNames = Object.keys(secondPart);
  } else if (firstPartIsObject && secondPartIsAbsent) {
    result.optionNames = Object.keys(firstPart);
  } else if (firstPartIsObject && !secondPartIsAbsent) {
    throwRuleConfigError(myRuleName);
  }

  return result;
};

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  const refOptionNames = schema.reduce((optNamesCollected, schemaElement) => {
    const optNames = getOptionNamesFromSchemaElement(schemaElement);
    return optNamesCollected.concat(optNames);
  }, []);

  console.log({ myRuleName, refOptionNames });

  const myOptions = getMyOptionsForArraySchema(myRuleEntry);

  const absentOptions = refOptionNames.filter(
    (refOptName) => !myOptions.optionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [myRuleName]: absentOptions };
};
