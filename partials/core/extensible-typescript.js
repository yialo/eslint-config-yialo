'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  sharedExtensibleCoreRules,
  sharedExtensibleCoreRulesReset,
} = require('./extensible-shared');

/**
 * NOTE: All diagnostic codes here:
 * @see {@link https://github.com/microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json}
 */
const tsCompilerCompatibilityExtensibleCoreRules = {
  // NOTE: ts(2335), ts(2377)
  'constructor-super': 'error',
  // NOTE: ts(2378)
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  // NOTE: ts(2588)
  'no-const-assign': 'error',
  // NOTE: ts(2300)
  'no-dupe-args': 'error',
  // NOTE: ts(1117)
  'no-dupe-keys': 'error',
  // NOTE: ts(2539)
  'no-func-assign': 'error',
  // NOTE: ts(2539), ts(2540)
  'no-import-assign': 'error',
  // NOTE: ts(2588)
  'no-new-symbol': 'error',
  // NOTE: ts(2349)
  'no-obj-calls': 'error',
  // NOTE: ts(2408)
  'no-setter-return': 'error',
  // NOTE: ts(2376)
  'no-this-before-super': 'error',
  // NOTE: ts(2304)
  'no-undef': 'error',
  // NOTE: ts(7027)
  'no-unreachable': 'error',
  // NOTE: ts(2358), ts(2360), ts(2365)
  'no-unsafe-negation': 'error',
  // NOTE: ts(2367)
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
};

const tsCompilerCompatibilityExtensibleCoreRulesReset = getDisabledRuleSet(
  tsCompilerCompatibilityExtensibleCoreRules,
);

const tsRegularExtensibleCoreRules = {
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
  // NOTE: ts(1016)
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
  // NOTE: ts(2300), ts(2393)
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
  'no-loss-of-precision': 'error',
  'no-magic-numbers': 'off',
  // NOTE: ts(2451)
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

const tsRegularExtensibleCoreRulesReset = getDisabledRuleSet(tsRegularExtensibleCoreRules);

const tsTypeCheckExtensibleCoreRules = {
  'dot-notation': [
    'error',
    {
      allowKeywords: true,
    },
  ],
  'no-implied-eval': 'error',
  'no-throw-literal': 'error',
  'require-await': 'error',
  'no-return-await': 'error',
};

const nonTypeCheckTsExtensibleCoreRulesReset = {
  ...sharedExtensibleCoreRulesReset,
  ...tsCompilerCompatibilityExtensibleCoreRulesReset,
  ...tsRegularExtensibleCoreRulesReset,
};

const tsTypeCheckExtensibleCoreRulesReset = getDisabledRuleSet(tsTypeCheckExtensibleCoreRules);

const tsTypeCheckCompatibilityExtensibleCoreRules = {
  /**
   * NOTE: Because of @typescript-eslint/no-unnecessary-condition own rule:
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md}
   */
  'no-constant-condition': 'error',
};

const tsTypeCheckCompatibilityExtensibleCoreRulesReset = getDisabledRuleSet(
  tsTypeCheckCompatibilityExtensibleCoreRules,
);

const typeCheckOnlyTsExtensibleCoreRulesReset = {
  ...tsTypeCheckExtensibleCoreRulesReset,
  ...tsTypeCheckCompatibilityExtensibleCoreRulesReset,
};

const tsExtensibleCoreRules = {
  ...sharedExtensibleCoreRules,
  ...tsCompilerCompatibilityExtensibleCoreRules,
  ...tsRegularExtensibleCoreRules,
  ...tsTypeCheckExtensibleCoreRules,
  ...tsTypeCheckCompatibilityExtensibleCoreRules,
};

module.exports = {
  tsExtensibleCoreRules,
  nonTypeCheckTsExtensibleCoreRulesReset,
  typeCheckOnlyTsExtensibleCoreRulesReset,
};
