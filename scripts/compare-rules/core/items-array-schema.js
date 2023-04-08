'use strict';

const {
  isObject,
  throwRuleConfigError,
  throwUnhandledSchemaError,
} = require('../_utils');

const getMyOptionsForItemsArraySchema = ([myRuleName, myRuleConfig]) => {
  const result = {
    mainOption: null,
    optionNames: [],
  };

  if (!Array.isArray(myRuleConfig)) {
    return;
  }

  const [_severity, firstPart, secondPart, ...partsRest] = myRuleConfig;

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
      const firstPartType = typeof firstPart;

      const allPartsHasTheSameType =
        typeof secondPart === firstPartType &&
        (partsRest.length === 0 ||
          partsRest.every((part) => typeof part === firstPartType));

      if (allPartsHasTheSameType) {
        result.mainOption = [firstPart, secondPart, ...partsRest];
      } else {
        throwRuleConfigError(myRuleName);
      }
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

module.exports.getAbsentPropsFromItemArraySchema = (items, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  const itemsWithOneOf = items.filter((item) => Array.isArray(item.oneOf));

  if (itemsWithOneOf.length !== 1) {
    throwUnhandledSchemaError(myRuleName);
  }

  const { oneOf } = itemsWithOneOf[0];

  const objectRefConfig = Object.values(oneOf).find(
    (config) => config.type === 'object',
  );

  if (!objectRefConfig) {
    throwUnhandledSchemaError(myRuleName);
  }

  // const refOptionNames = getOptionNamesFromSchemaElement(objectRefConfig);
  // const myOptions = getMyOptionsForItemsArraySchema(myRuleEntry);

  // const absentOptions = refOptionNames.filter(
  //   (refOptName) => !myOptions.optionNames.includes(refOptName),
  // );

  // if (!absentOptions.length) {
  //   return {};
  // }

  // return { [myRuleName]: absentOptions };
};
