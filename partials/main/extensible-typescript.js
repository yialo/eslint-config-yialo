'use strict';

const { getDisabledRuleSet } = require('../utils');
const { commonExtensibleRules, commonResetRules } = require('./extensible-common');

/**
 * NOTE:
 * Explanation:
 * https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/eslint-recommended.ts
 * All diagnostic codes:
 * https://github.com/microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
 */
const tsCompatibilityRules = {
  'constructor-super': 'error',
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'no-const-assign': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-keys': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-new-symbol': 'error',
  'no-obj-calls': 'error',
  'no-redeclare': 'error',
  'no-setter-return': 'error',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unreachable': 'error',
  'no-unsafe-negation': 'error',
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
};

const tsCompatibilityResetRules = getDisabledRuleSet(tsCompatibilityRules);

const tsRegularExtensibleRules = {
  'brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: false,
    },
  ],
  'comma-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
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
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
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
};

// TODO: remove rules when they would be fixed
const TEMPORARY_BROKEN_RULE_NAMES = [
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
  'indent',
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
  'no-unused-vars',
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
  'no-use-before-define',
];

const tsRegularResetRules = getDisabledRuleSet(
  tsRegularExtensibleRules,
  (ruleName) => !TEMPORARY_BROKEN_RULE_NAMES.includes(ruleName),
);

const tsTypeCheckExtensibleRules = {
  'dot-notation': [
    'error',
    {
      allowKeywords: true,
    },
  ],
  'require-await': 'error',
  'no-return-await': 'error',
};

const tsTypeCheckResetRules = getDisabledRuleSet(tsTypeCheckExtensibleRules);

const tsExtensibleRules = {
  ...commonExtensibleRules,
  ...tsCompatibilityRules,
  ...tsRegularExtensibleRules,
  ...tsTypeCheckExtensibleRules,
};

const tsNonTypeCheckResetRules = {
  ...commonResetRules,
  ...tsCompatibilityResetRules,
  ...tsRegularResetRules,
};

module.exports = {
  tsExtensibleRules,
  tsNonTypeCheckResetRules,
  tsTypeCheckResetRules,
};
