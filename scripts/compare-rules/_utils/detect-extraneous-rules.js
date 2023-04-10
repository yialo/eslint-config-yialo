'use strict';

const { loggerUtil } = require('./logger');

module.exports.detectExtraneousRulesInMyOnes = (
  myRuleNames,
  nonDeprecatedRefRuleNames,
) => {
  return myRuleNames.filter(
    (name) => !nonDeprecatedRefRuleNames.includes(name),
  );
};

module.exports.logExtraneous = (extraneousRuleNames, pluginName) => {
  loggerUtil.groupLog(`[${pluginName}] Extraneous rules`, () => {
    console.log(extraneousRuleNames);
  });
};
