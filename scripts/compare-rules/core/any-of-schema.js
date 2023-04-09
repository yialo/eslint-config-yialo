'use strict';

const {
  isObject,
  getObjectSchemaAbsentOptionsNames,
  loggerUtil,
  SchemaTyped,
  SCHEMA_TYPE,
} = require('../_utils');

module.exports.getAbsentPropsFromAnyOfSchema = (
  anyOfSchemasRaw,
  myRuleEntry,
) => {
  const myRuleName = myRuleEntry.name;

  const anyOfSchemas = anyOfSchemasRaw.map(
    (schemaRaw) => new SchemaTyped(schemaRaw),
  );

  const allAnyOfSchemasHasArrayType = anyOfSchemas.every(
    (schema) => schema.type === SCHEMA_TYPE.ARRAY,
  );

  if (allAnyOfSchemasHasArrayType) {
    const allFirstElementsAreEnums = anyOfSchemas.every(
      (schema) => schema.value.items[0].enum,
    );

    if (allFirstElementsAreEnums) {
      const anyOfSchemasMatchedByEnum = anyOfSchemas.filter((schema) => {
        const enumVariants = schema.value.items[0].enum;
        return enumVariants.includes(myRuleEntry.config[0]);
      });

      const matchedAnyOfSchemasWithTheOnlyParam =
        anyOfSchemasMatchedByEnum.filter(
          (schema) => schema.value.items.length === 1,
        );

      if (
        matchedAnyOfSchemasWithTheOnlyParam.length ===
        anyOfSchemasMatchedByEnum.length
      ) {
        return {};
      }

      const matchedAnyOfSchemasWithObjectAsSecondParam =
        anyOfSchemasMatchedByEnum.filter(
          (schema) => schema.value.items[1]?.type === 'object',
        );

      if (matchedAnyOfSchemasWithObjectAsSecondParam.length > 0) {
        if (!isObject(myRuleEntry.config[1])) {
          loggerUtil.logAndThrow(
            `Rule ${myRuleName} should be configured as array with object as third element`,
          );
          return {};
        }

        const optionNamesOfMyConfigSecondElement = Object.keys(
          myRuleEntry.config[1],
        );

        const matchedAnyOfSchemasByOptionNames =
          matchedAnyOfSchemasWithObjectAsSecondParam.filter((schema) => {
            const schemaOptionNames = Object.keys(
              schema.value.items[1].properties,
            );
            return optionNamesOfMyConfigSecondElement.every((myOptionName) =>
              schemaOptionNames.includes(myOptionName),
            );
          });

        if (matchedAnyOfSchemasByOptionNames.length === 1) {
          const propertiesOfBestMatchedSchema =
            matchedAnyOfSchemasByOptionNames[0].value.items[1].properties;
          return getObjectSchemaAbsentOptionsNames({
            ruleName: myRuleName,
            myOptions: myRuleEntry.config[1],
            refOptions: propertiesOfBestMatchedSchema,
          });
        }
      }
    }
  }

  loggerUtil.throwUnhandledSchemaError(myRuleName);
};
