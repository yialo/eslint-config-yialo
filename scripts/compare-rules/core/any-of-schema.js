'use strict';

const { getMyOptions, throwUnhandledSchemaError } = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

module.exports.getAbsentPropsFromAnyOfSchema = (anyOf, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  const anyOfItems = anyOf.map(({ items }) => items);

  const myOptions = getMyOptions(myRuleEntry);

  const matchedSchema = anyOfItems.find((anyOfItem) => {
    const possibleStringOptions = anyOfItem[0]?.enum;

    if (!Array.isArray(possibleStringOptions)) {
      throwUnhandledSchemaError(myRuleName);
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
