'use strict';

const { tsExtensibleRules } = require('../core');

const regularRules = {
  '@typescript-eslint/brace-style': tsExtensibleRules['brace-style'],
  '@typescript-eslint/comma-spacing': tsExtensibleRules['comma-spacing'],
  // NOTE: ts(1016)
  '@typescript-eslint/default-param-last': 'off',
  '@typescript-eslint/func-call-spacing': tsExtensibleRules['func-call-spacing'],
  /**
   * NOTE: rule can produce issues in some cases
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md}
   */
  '@typescript-eslint/indent': tsExtensibleRules.indent,
  '@typescript-eslint/init-declarations': tsExtensibleRules['init-declarations'],
  '@typescript-eslint/keyword-spacing': tsExtensibleRules['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': [
    tsExtensibleRules['lines-between-class-members'][0],
    tsExtensibleRules['lines-between-class-members'][1],
    {
      ...tsExtensibleRules['lines-between-class-members'][2],
      exceptAfterOverload: true,
    },
  ],
  '@typescript-eslint/no-array-constructor': tsExtensibleRules['no-array-constructor'],
  // NOTE: ts(2300), ts(2393)
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-duplicate-imports': tsExtensibleRules['no-duplicate-imports'],
  '@typescript-eslint/no-empty-function': [
    tsExtensibleRules['no-empty-function'][0],
    {
      allow: [
        ...tsExtensibleRules['no-empty-function'][1].allow,
        'decoratedFunctions',
      ],
    },
  ],
  '@typescript-eslint/no-extra-parens': tsExtensibleRules['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': tsExtensibleRules['no-extra-semi'],
  '@typescript-eslint/no-invalid-this': tsExtensibleRules['no-invalid-this'],
  '@typescript-eslint/no-loss-of-precision': tsExtensibleRules['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': tsExtensibleRules['no-magic-numbers'],
  // NOTE: ts(2451)
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-shadow': tsExtensibleRules['no-shadow'],
  '@typescript-eslint/no-unused-expressions': tsExtensibleRules['no-unused-expressions'],
  '@typescript-eslint/no-unused-vars': tsExtensibleRules['no-unused-vars'],
  /**
   * NOTE: rule can produce issues in some cases
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md}
   */
  '@typescript-eslint/no-use-before-define': tsExtensibleRules['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': tsExtensibleRules['no-useless-constructor'],
  '@typescript-eslint/quotes': tsExtensibleRules.quotes,
  '@typescript-eslint/semi': tsExtensibleRules.semi,
  '@typescript-eslint/space-before-function-paren':
    tsExtensibleRules['space-before-function-paren'],
  '@typescript-eslint/space-infix-ops': tsExtensibleRules['space-infix-ops'],
};

const typeCheckRules = {
  '@typescript-eslint/dot-notation': [
    tsExtensibleRules['dot-notation'][0],
    {
      ...tsExtensibleRules['dot-notation'][1],
      allowPrivateClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/no-implied-eval': tsExtensibleRules['no-implied-eval'],
  '@typescript-eslint/no-throw-literal': tsExtensibleRules['no-throw-literal'],
  '@typescript-eslint/object-curly-spacing': tsExtensibleRules['object-curly-spacing'],
  '@typescript-eslint/require-await': tsExtensibleRules['require-await'],
  // NOTE: different name: 'no-return-await' -> 'return-await'
  '@typescript-eslint/return-await': [
    tsExtensibleRules['no-return-await'],
    'in-try-catch',
  ],
};

module.exports = {
  regularRules,
  typeCheckRules,
};
