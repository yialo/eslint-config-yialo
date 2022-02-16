'use strict';

module.exports.compareRuleLists = ({
  myRuleNames,
  referenceRuleNames,
  // deprecatedRuleNames = [],
}, pluginName) => {
  const missingRuleNames = referenceRuleNames.filter((ruleName) => !myRuleNames.includes(ruleName));

  const extraneousRuleNames = myRuleNames
    .filter((ruleName) => !referenceRuleNames.includes(ruleName));

  console.group(pluginName);
  console.log('missingRuleNames', missingRuleNames.length, missingRuleNames);
  console.log('extraneousRuleNames', extraneousRuleNames.length, extraneousRuleNames);
  console.groupEnd(pluginName);
};
