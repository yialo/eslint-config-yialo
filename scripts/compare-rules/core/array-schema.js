'use strict';

const { isObject } = require('../_utils');

module.exports.getAbsentPropsFromArraySchema = (
  schema,
  [myRuleName, myRuleConfig],
) => {
  const refOptionNames = schema.reduce((optNamesCollected, schemaElement) => {
    if (!isObject(schemaElement)) {
      return optNamesCollected;
    }

    if (schemaElement.type !== 'object') {
      return optNamesCollected;
    }

    return optNamesCollected.concat(Object.keys(schemaElement.properties));
  }, []);

  const myOptionNames = Object.keys(
    Array.isArray(myRuleConfig) ? myRuleConfig.at(-1) : {},
  );

  const absentOptions = refOptionNames.filter(
    (refOptName) => !myOptionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [myRuleName]: absentOptions };
};
