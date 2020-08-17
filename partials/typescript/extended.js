'use strict';

const { tsExtensibleRules } = require('../main');

const regularRules = {
  '@typescript-eslint/brace-style': tsExtensibleRules['brace-style'],
  '@typescript-eslint/comma-spacing': tsExtensibleRules['comma-spacing'],
  '@typescript-eslint/default-param-last': tsExtensibleRules['default-param-last'],
  '@typescript-eslint/func-call-spacing': tsExtensibleRules['func-call-spacing'],
  // TODO: enable when rule would be fixed
  // '@typescript-eslint/indent': tsExtensibleRules.indent,
  '@typescript-eslint/init-declarations': tsExtensibleRules['init-declarations'],
  '@typescript-eslint/keyword-spacing': tsExtensibleRules['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': [
    'error',
    'always',
    {
      exceptAfterOverload: true,
      exceptAfterSingleLine: true,
    },
  ],
  '@typescript-eslint/no-array-constructor': tsExtensibleRules['no-array-constructor'],
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [
        'arrowFunctions',
        'decoratedFunctions',
        'functions',
        'methods',
      ],
    },
  ],
  '@typescript-eslint/no-extra-parens': tsExtensibleRules['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': tsExtensibleRules['no-extra-semi'],
  '@typescript-eslint/no-invalid-this': tsExtensibleRules['no-invalid-this'],
  '@typescript-eslint/no-loss-of-precision': tsExtensibleRules['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': tsExtensibleRules['no-magic-numbers'],
  '@typescript-eslint/no-unused-expressions': tsExtensibleRules['no-unused-expressions'],
  // TODO: enable when rule would be fixed
  // '@typescript-eslint/no-unused-vars': tsExtensibleRules['no-unused-vars'],
  // TODO: enable when rule would be fixed
  // '@typescript-eslint/no-use-before-define': tsExtensibleRules['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': tsExtensibleRules['no-useless-constructor'],
  '@typescript-eslint/quotes': tsExtensibleRules.quotes,
  '@typescript-eslint/semi': tsExtensibleRules.semi,
  '@typescript-eslint/space-before-function-paren':
    tsExtensibleRules['space-before-function-paren'],
};

const typeCheckRules = {
  '@typescript-eslint/dot-notation': [
    'error',
    {
      allowKeywords: true,
      allowPrivateClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/require-await': tsExtensibleRules['require-await'],
  // NOTE: mirrors original 'no-return-await' rule
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
};

module.exports = {
  regularRules,
  typeCheckRules,
};