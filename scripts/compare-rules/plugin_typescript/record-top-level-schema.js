'use strict';

const {
  getObjectSchemaAbsentOptionsNames,
  isObject,
  loggerUtil,
  SCHEMA_TYPE,
  TypedSchema,
} = require('../lib');

module.exports.getAbsentPropsFromRecordTopLevelSchema = (
  recordTopLevelSchema,
  myRuleEntry,
) => {
  const typedSchema = new TypedSchema(recordTopLevelSchema);

  if (typedSchema.type === SCHEMA_TYPE.ARRAY) {
    if (!isObject(myRuleEntry.config[0])) {
      loggerUtil.logAndThrow(
        `Options config of rule ${myRuleEntry.name} should be object`,
        loggerUtil.colorize.brightMagenta,
      );
      return null;
    }

    const schema = typedSchema.value;
    const { $defs: defs, prefixItems: items } = schema;

    if (!defs || !items || !Array.isArray(items) || items.length !== 1) {
      loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
      return null;
    }

    const optionProps = items[0].properties;

    return getObjectSchemaAbsentOptionsNames({
      ruleName: myRuleEntry.name,
      myOptions: myRuleEntry.config[0],
      refOptions: optionProps,
    });
  }

  loggerUtil.throwUnhandledSchemaError(myRuleEntry.name);
};
