'use strict';

const { getDisabledRuleSet } = require('../_utils');

/**
 * All diagnostic codes here:
 * @see https://github.com/microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
 */
const coreRules_tsCompat_nonTypeCheck = {
  // ts(2335), ts(2377)
  'constructor-super': 'error',
  // ts(2378)
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  // ts(2588)
  'no-const-assign': 'error',
  // ts(2300)
  'no-dupe-args': 'error',
  // ts(1117)
  'no-dupe-keys': 'error',
  // ts(2539)
  'no-func-assign': 'error',
  // ts(2539), ts(2540)
  'no-import-assign': 'error',
  // ts(2588)
  'no-new-symbol': 'error',
  // ts(2349)
  'no-obj-calls': 'error',
  // ts(2408)
  'no-setter-return': 'error',
  // ts(2376)
  'no-this-before-super': 'error',
  // ts(2304)
  'no-undef': [
    'error',
    {
      typeof: false,
    },
  ],
  // ts(7027)
  'no-unreachable': 'error',
  // ts(2358), ts(2360), ts(2365)
  'no-unsafe-negation': ['error', { enforceForOrderingRelations: false }],
  // ts(2367)
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: false,
    },
  ],
};

const coreRules_tsCompat_nonTypeCheck_OFF = getDisabledRuleSet(
  coreRules_tsCompat_nonTypeCheck,
);

const coreRules_tsCompat_typeCheckOnly = {
  /**
   * Because of @typescript-eslint/no-unnecessary-condition own rule:
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
   */
  // FIXME: after debug
  // 'no-constant-condition': ['error', { checkLoops: true }],
  'no-constant-condition': 'error',
};

const coreRules_tsCompat_typeCheckOnly_OFF = getDisabledRuleSet(
  coreRules_tsCompat_typeCheckOnly,
);

module.exports = {
  coreRules_tsCompat_nonTypeCheck,
  coreRules_tsCompat_nonTypeCheck_OFF,

  coreRules_tsCompat_typeCheckOnly,
  coreRules_tsCompat_typeCheckOnly_OFF,
};
