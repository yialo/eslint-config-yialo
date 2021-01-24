'use strict';

const { tsExtensibleCoreRules } = require('../core');

const regularExtenderTsRules = {
  '@typescript-eslint/brace-style': tsExtensibleCoreRules['brace-style'],
  '@typescript-eslint/comma-spacing': tsExtensibleCoreRules['comma-spacing'],
  // NOTE: ts(1016)
  '@typescript-eslint/default-param-last': 'off',
  '@typescript-eslint/func-call-spacing': tsExtensibleCoreRules['func-call-spacing'],
  /**
   * NOTE: rule can produce issues in some cases
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md}
   */
  '@typescript-eslint/indent': tsExtensibleCoreRules.indent,
  '@typescript-eslint/init-declarations': tsExtensibleCoreRules['init-declarations'],
  '@typescript-eslint/keyword-spacing': tsExtensibleCoreRules['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': [
    tsExtensibleCoreRules['lines-between-class-members'][0],
    tsExtensibleCoreRules['lines-between-class-members'][1],
    {
      ...tsExtensibleCoreRules['lines-between-class-members'][2],
      exceptAfterOverload: true,
    },
  ],
  '@typescript-eslint/no-array-constructor': tsExtensibleCoreRules['no-array-constructor'],
  // NOTE: ts(2300), ts(2393)
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-duplicate-imports': tsExtensibleCoreRules['no-duplicate-imports'],
  '@typescript-eslint/no-empty-function': [
    tsExtensibleCoreRules['no-empty-function'][0],
    {
      allow: [
        ...tsExtensibleCoreRules['no-empty-function'][1].allow,
        'decoratedFunctions',
      ],
    },
  ],
  '@typescript-eslint/no-extra-parens': tsExtensibleCoreRules['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': tsExtensibleCoreRules['no-extra-semi'],
  '@typescript-eslint/no-invalid-this': tsExtensibleCoreRules['no-invalid-this'],
  '@typescript-eslint/no-loss-of-precision': tsExtensibleCoreRules['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': tsExtensibleCoreRules['no-magic-numbers'],
  // NOTE: ts(2451)
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-shadow': tsExtensibleCoreRules['no-shadow'],
  '@typescript-eslint/no-unused-expressions': tsExtensibleCoreRules['no-unused-expressions'],
  '@typescript-eslint/no-unused-vars': tsExtensibleCoreRules['no-unused-vars'],
  /**
   * NOTE: rule can produce issues in some cases
   * @see {@link https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md}
   */
  '@typescript-eslint/no-use-before-define': tsExtensibleCoreRules['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': tsExtensibleCoreRules['no-useless-constructor'],
  '@typescript-eslint/quotes': tsExtensibleCoreRules.quotes,
  '@typescript-eslint/semi': tsExtensibleCoreRules.semi,
  '@typescript-eslint/space-before-function-paren':
    tsExtensibleCoreRules['space-before-function-paren'],
  '@typescript-eslint/space-infix-ops': tsExtensibleCoreRules['space-infix-ops'],
};

const typeCheckRules = {
  '@typescript-eslint/dot-notation': [
    tsExtensibleCoreRules['dot-notation'][0],
    {
      ...tsExtensibleCoreRules['dot-notation'][1],
      allowPrivateClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/no-implied-eval': tsExtensibleCoreRules['no-implied-eval'],
  '@typescript-eslint/no-throw-literal': tsExtensibleCoreRules['no-throw-literal'],
  '@typescript-eslint/object-curly-spacing': tsExtensibleCoreRules['object-curly-spacing'],
  '@typescript-eslint/require-await': tsExtensibleCoreRules['require-await'],
  // NOTE: different name: 'no-return-await' -> 'return-await'
  '@typescript-eslint/return-await': [
    tsExtensibleCoreRules['no-return-await'],
    'in-try-catch',
  ],
};

module.exports = {
  regularExtenderTsRules,
  typeCheckRules,
};
