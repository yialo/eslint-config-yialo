'use strict';

const { getMyOptions } = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

module.exports.getAbsentPropsFromItemArraySchema = (items, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  const itemsWithOneOf = items.filter((item) => Array.isArray(item.oneOf));

  if (itemsWithOneOf.length !== 1) {
    throw new Error(`Rule: ${myRuleName}, unexpected schema.items: ${items}`);
  }

  const { oneOf } = itemsWithOneOf[0];

  const objectRefConfig = Object.values(oneOf).find(
    (config) => config.type === 'object',
  );

  if (!objectRefConfig) {
    throw new Error(
      `Rule: ${myRuleName}, unexpected schema.items item oneOf: ${oneOf}`,
    );
  }

  const refOptionNames = getOptionNamesFromSchemaElement(objectRefConfig);
  const myOptions = getMyOptions(myRuleEntry);

  const absentOptions = refOptionNames.filter(
    (refOptName) => !myOptions.optionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [myRuleName]: absentOptions };
};
