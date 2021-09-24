'use strict';

const { getDisabledRuleSet } = require('../utils');
const {
  coreRules_extensibleShared,
  coreRules_extensibleShared_OFF,
} = require('./extensible-shared');

/**
 * All diagnostic codes here:
 * @see https://github.com/microsoft/TypeScript/blob/master/src/compiler/diagnosticMessages.json
 */
const coreRules_extensibleWithTs_nonTypeCheck_compatibility = {
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
  'no-undef': 'error',
  // ts(7027)
  'no-unreachable': 'error',
  // ts(2358), ts(2360), ts(2365)
  'no-unsafe-negation': 'error',
  // ts(2367)
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
};

const coreRules_extensibleWithTs_nonTypeCheck_compatibility_OFF = getDisabledRuleSet(
  coreRules_extensibleWithTs_nonTypeCheck_compatibility,
);

const coreRules_extensibleWithTs_nonTypeCheck_regular = {
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

const coreRules_extensibleWithTs_nonTypeCheck_regular_OFF = getDisabledRuleSet(
  coreRules_extensibleWithTs_nonTypeCheck_regular,
);

const coreRules_extensibleWithTs_typeCheck_compatibility = {
  /**
   * Because of @typescript-eslint/no-unnecessary-condition own rule:
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
   */
  'no-constant-condition': 'error',
};

const coreRules_extensibleWithTs_typeCheck_compatibility_OFF = getDisabledRuleSet(
  coreRules_extensibleWithTs_typeCheck_compatibility,
);

const coreRules_extensibleWithTs_typeCheck_regular = {
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

const coreRules_extensibleWithTs_typeCheck_regular_OFF = getDisabledRuleSet(
  coreRules_extensibleWithTs_typeCheck_regular,
);

const coreRules_extensibleWithTs_only = {
  ...coreRules_extensibleWithTs_nonTypeCheck_compatibility,
  ...coreRules_extensibleWithTs_nonTypeCheck_regular,
  ...coreRules_extensibleWithTs_typeCheck_compatibility,
  ...coreRules_extensibleWithTs_typeCheck_regular,
};

const coreRules_extensibleWithTs_full = {
  ...coreRules_extensibleShared,
  ...coreRules_extensibleWithTs_only,
};

const coreRules_extensibleWithTs_nonTypeCheck_OFF = {
  // All Babel/TS-shared extensible rules belong to nonTypeCheck group
  ...coreRules_extensibleShared_OFF,
  ...coreRules_extensibleWithTs_nonTypeCheck_compatibility_OFF,
  ...coreRules_extensibleWithTs_nonTypeCheck_regular_OFF,
};

const coreRules_extensibleWithTs_typeCheckOnly_OFF = {
  ...coreRules_extensibleWithTs_typeCheck_compatibility_OFF,
  ...coreRules_extensibleWithTs_typeCheck_regular_OFF,
};

module.exports = {
  coreRules_extensibleWithTs_full,
  coreRules_extensibleWithTs_only,
  coreRules_extensibleWithTs_nonTypeCheck_OFF,
  coreRules_extensibleWithTs_typeCheckOnly_OFF,
};
