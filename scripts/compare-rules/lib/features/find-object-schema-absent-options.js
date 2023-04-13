'use strict';

module.exports.findObjectSchemaAbsentOptionsNames = ({
  ruleName,
  myOptions,
  refOptions,
  forSecondOptionObject = false,
}) => {
  const myOptionNames = Object.keys(myOptions);
  const schemaOptionNames = Object.keys(refOptions);
  const absentOptions = schemaOptionNames.filter(
    (refOptName) => !myOptionNames.includes(refOptName),
  );

  if (!absentOptions.length) {
    return {};
  }

  if (forSecondOptionObject) {
    return {
      [`${ruleName}, second option object`]: absentOptions,
    };
  }

  return { [ruleName]: absentOptions };
};
