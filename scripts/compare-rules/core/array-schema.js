'use strict';

const { isObject, getMyOptions } = require('../_utils');

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

  const myOptions = getMyOptions(myRuleConfig);

  const absentOptions = refOptionNames.filter(
    (refOptName) => !myOptions.optionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [myRuleName]: absentOptions };
};
