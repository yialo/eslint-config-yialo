'use strict';

const { getDisabledRuleSet } = require('../_utils');

const coreRules_extensibleWithTs_nonTypeCheck = {
  'block-spacing': 'off',
  'brace-style': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  // ts(1016)
  'default-param-last': 'error',
  'func-call-spacing': 'off',
  'indent': 'off',
  'init-declarations': 'off',
  'key-spacing': 'off',
  'keyword-spacing': 'off',
  'lines-around-comment': 'off',
  'lines-between-class-members': [
    'error',
    'always',
    {
      exceptAfterSingleLine: true,
    },
  ],
  'no-array-constructor': 'error',
  // ts(2300), ts(2393)
  'no-dupe-class-members': 'error',
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  // ts(2451)
  'no-redeclare': ['error', { builtinGlobals: true }],
  'no-restricted-imports': 'off',
  'no-shadow': [
    'error',
    {
      allow: [],
      builtinGlobals: false,
      hoist: 'functions',
      ignoreOnInitialization: false,
    },
  ],
  'no-unused-vars': [
    'warn',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: undefined,
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
      vars: 'all',
      varsIgnorePattern: undefined,
    },
  ],
  'no-use-before-define': [
    'error',
    {
      classes: true,
      functions: true,
      variables: false,
      allowNamedExports: false,
    },
  ],
  'no-useless-constructor': 'error',
  'padding-line-between-statements': 'off',
  'quotes': 'off',
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-infix-ops': 'off',
};

const coreRules_extensibleWithTs_nonTypeCheck_OFF = getDisabledRuleSet(
  coreRules_extensibleWithTs_nonTypeCheck,
);

const coreRules_extensibleWithTs_typeCheckOnly = {
  'dot-notation': 'off',
  'no-implied-eval': 'error',
  'no-throw-literal': 'error',
  'require-await': 'error',
  'no-return-await': 'error',
};

const coreRules_extensibleWithTs_typeCheckOnly_OFF = getDisabledRuleSet(
  coreRules_extensibleWithTs_typeCheckOnly,
);

module.exports = {
  coreRules_extensibleWithTs_nonTypeCheck,
  coreRules_extensibleWithTs_nonTypeCheck_OFF,

  coreRules_extensibleWithTs_typeCheckOnly,
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
};
