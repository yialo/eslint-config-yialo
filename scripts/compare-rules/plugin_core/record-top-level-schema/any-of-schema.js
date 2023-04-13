'use strict';

const {
  isObject,
  getObjectSchemaAbsentOptionsNames,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../../lib');

module.exports.getAbsentPropsFromAnyOfSchema = (
  anyOfSchemaTyped,
  myRuleEntry,
) => {
  const anyOfSchemasRaw = anyOfSchemaTyped.value.anyOf;

  const anyOfSchemas = anyOfSchemasRaw.map(
    (schemaRaw) => new TypedSchema(schemaRaw),
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
        return null;
      }

      const matchedAnyOfSchemasWithObjectAsSecondParam =
        anyOfSchemasMatchedByEnum.filter(
          (schema) => schema.value.items[1]?.type === 'object',
        );

      if (matchedAnyOfSchemasWithObjectAsSecondParam.length > 0) {
        if (!isObject(myRuleEntry.config[1])) {
          loggerUtil.logAndThrow(
            `Rule ${myRuleEntry.name} should be configured as array with object as third element`,
          );
          return null;
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
            ruleName: myRuleEntry.name,
            myOptions: myRuleEntry.config[1],
            refOptions: propertiesOfBestMatchedSchema,
          });
        }
      }
    }
  }

  loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
};
