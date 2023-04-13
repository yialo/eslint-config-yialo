'use strict';

const { loggerUtil } = require('./logger');

module.exports.detectMissingRules = (
  myRuleNames,
  nonDeprecatedRefRuleNames,
) => {
  return nonDeprecatedRefRuleNames.filter(
    (name) => !myRuleNames.includes(name),
  );
};

module.exports.logMissing = (missingRuleNames, pluginName) => {
  loggerUtil.groupLog(`[${pluginName}] Missing rules`, () => {
    console.log(missingRuleNames);
  });
};
