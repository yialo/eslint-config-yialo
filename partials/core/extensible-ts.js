'use strict';

const { getDisabledRuleSet } = require('../utils');
const { coreRules_extensibleShared_OFF } = require('./extensible-shared');
const {
  coreRules_tsCompat_nonTypeCheck,
  coreRules_tsCompat_nonTypeCheck_OFF,
  coreRules_tsCompat_typeCheckOnly,
  coreRules_tsCompat_typeCheckOnly_OFF,
} = require('./ts-compat');

const coreRules_extensibleWithTs_nonTypeCheck = {
  'brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: false,
    },
  ],
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    },
  ],
  'comma-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  // ts(1016)
  'default-param-last': 'error',
  'func-call-spacing': ['error', 'never'],
  'indent': [
    'error',
    2,
    {
      ArrayExpression: 1,
      CallExpression: {
        arguments: 1,
      },
      FunctionDeclaration: {
        body: 1,
        parameters: 1,
      },
      FunctionExpression: {
        body: 1,
        parameters: 1,
      },
      ImportDeclaration: 1,
      ObjectExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
      outerIIFEBody: 1,
    },
  ],
  'init-declarations': 'off',
  'keyword-spacing': [
    'error',
    {
      after: true,
      before: true,
      overrides: {
        case: {
          after: true,
        },
        return: {
          after: true,
        },
        throw: {
          after: true,
        },
      },
    },
  ],
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
  'no-duplicate-imports': 'off',
  'no-empty-function': [
    'error',
    {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ],
    },
  ],
  'no-extra-parens': 'off',
  'no-extra-semi': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  // ts(2451)
  'no-redeclare': 'error',
  'no-shadow': 'error',
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  'no-use-before-define': [
    'error',
    {
      classes: true,
      functions: true,
      variables: false,
    },
  ],
  'no-useless-constructor': 'error',
  'padding-line-between-statements': 'off',
  'quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true,
    },
  ],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      asyncArrow: 'always',
      named: 'never',
    },
  ],
  'space-infix-ops': 'error',
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

const coreRules_extensibleWithTs_only = {
  ...coreRules_tsCompat_nonTypeCheck,
  ...coreRules_extensibleWithTs_nonTypeCheck,
  ...coreRules_tsCompat_typeCheckOnly,
  ...coreRules_extensibleWithTs_typeCheckOnly,
};

const coreRules_extensibleWithTs_nonTypeCheck_full_OFF = {
  // All Babel/TS-shared extensible rules belong to nonTypeCheck group
  ...coreRules_extensibleShared_OFF,
  ...coreRules_tsCompat_nonTypeCheck_OFF,
  ...coreRules_extensibleWithTs_nonTypeCheck_OFF,
};

const coreRules_extensibleWithTs_typeCheckOnly_full_OFF = {
  ...coreRules_tsCompat_typeCheckOnly_OFF,
  ...coreRules_extensibleWithTs_typeCheckOnly_OFF,
};

module.exports = {
  /**
   * Usage:
   * - For full core ruleset composition in abstract mixin
   * - As reference to TS-only extensible core ruleset in extension TS partial
   */
  coreRules_extensibleWithTs_only,

  // TODO: add and describe these exports
  // coreRules_extensibleWithTs_nonTypeCheck,
  // coreRules_extensibleWithTs_typeCheckOnly,

  /**
   * Usage:
   * - Disables all non-typecheck TS-extensible core rules in non-typecheck TS mixin
   */
  coreRules_extensibleWithTs_nonTypeCheck_full_OFF,

  /**
   * Usage:
   * - Disables all typecheck-only TS-extensible core rules in typecheck-only TS mixin
   */
  coreRules_extensibleWithTs_typeCheckOnly_full_OFF,
};
