'use strict';

const { getMyOptions } = require('../_utils');
const { getOptionNamesFromSchemaElement } = require('./utils');

module.exports.getAbsentPropsFromArraySchema = (schema, myRuleEntry) => {
  const [myRuleName] = myRuleEntry;

  const refOptionNames = schema.reduce((optNamesCollected, schemaElement) => {
    const optNames = getOptionNamesFromSchemaElement(schemaElement);
    return optNamesCollected.concat(optNames);
  }, []);

  const myOptions = getMyOptions(myRuleEntry);

  const absentOptions = refOptionNames.filter(
    (refOptName) => !myOptions.optionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  return { [myRuleName]: absentOptions };
};
