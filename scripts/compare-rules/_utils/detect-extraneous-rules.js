'use strict';

const { loggerUtil } = require('./logger');

module.exports.detectExtraneousRulesInMyOnes = (
  myRuleNames,
  allRefRuleNames,
) => {
  return myRuleNames.filter((name) => !allRefRuleNames.includes(name));
};

module.exports.logExtraneous = (extraneousRuleNames, pluginName) => {
  loggerUtil.groupLog(`[${pluginName}] Extraneous rules`, () => {
    console.log(extraneousRuleNames);
  });
};
