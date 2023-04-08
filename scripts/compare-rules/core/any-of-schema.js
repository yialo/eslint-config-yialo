'use strict';

const { loggerUtil, isObject } = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

const getMyOptionsForAnyOfSchema = ([myRuleName, myRuleConfig]) => {
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
      loggerUtil.throwRuleConfigError(myRuleName);
    }
  } else if (firstPartIsObject && secondPartIsObject) {
    result.mainOption = firstPart;
    result.optionNames = Object.keys(secondPart);
  } else if (firstPartIsObject && secondPartIsAbsent) {
    result.optionNames = Object.keys(firstPart);
  } else if (firstPartIsObject && !secondPartIsAbsent) {
    loggerUtil.throwRuleConfigError(myRuleName);
  }

  return result;
};

module.exports.getAbsentPropsFromAnyOfSchema = (anyOf, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  const anyOfItems = anyOf.map(({ items }) => items);

  const myOptions = getMyOptionsForAnyOfSchema(myRuleEntry);

  const matchedSchema = anyOfItems.find((anyOfItem) => {
    const possibleStringOptions = anyOfItem[0]?.enum;

    if (!Array.isArray(possibleStringOptions)) {
      loggerUtil.throwUnhandledSchemaError(myRuleName);
    }
    return possibleStringOptions.includes(myOptions.mainOption);
  });

  if (!matchedSchema || !matchedSchema[1]) {
    return {};
  }

  const refOptionNames = getOptionNamesFromSchemaElement(matchedSchema[1]);

  const absentOptions = refOptionNames.filter(
    (refOptName) => !myOptions.optionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [myRuleName]: absentOptions };
};
