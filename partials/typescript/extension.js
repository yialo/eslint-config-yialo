'use strict';

const { coreRules_extensibleShared } = require('../core/extensible-shared');
const { coreRules_extensibleWithTs_only } = require('../core/extensible-ts');

const tsRules_extension_regular = {
  // Shared extension rules
  '@typescript-eslint/no-invalid-this': coreRules_extensibleShared['no-invalid-this'],
  '@typescript-eslint/no-unused-expressions': coreRules_extensibleShared['no-unused-expressions'],
  '@typescript-eslint/object-curly-spacing': coreRules_extensibleShared['object-curly-spacing'],
  '@typescript-eslint/semi': coreRules_extensibleWithTs_only['semi'],

  '@typescript-eslint/brace-style': coreRules_extensibleWithTs_only['brace-style'],
  '@typescript-eslint/comma-dangle': [
    coreRules_extensibleWithTs_only['comma-dangle'][0],
    {
      ...coreRules_extensibleWithTs_only['comma-dangle'][1],
      enums: 'always-multiline',
      generics: 'always-multiline',
      tuples: 'always-multiline',
    },
  ],
  '@typescript-eslint/comma-spacing': coreRules_extensibleWithTs_only['comma-spacing'],
  // ts(1016)
  '@typescript-eslint/default-param-last': 'off',
  '@typescript-eslint/func-call-spacing': coreRules_extensibleWithTs_only['func-call-spacing'],
  /**
   * rule may produce issues in some cases
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
   */
  '@typescript-eslint/indent': coreRules_extensibleWithTs_only['indent'],
  '@typescript-eslint/init-declarations': coreRules_extensibleWithTs_only['init-declarations'],
  '@typescript-eslint/keyword-spacing': coreRules_extensibleWithTs_only['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': [
    coreRules_extensibleWithTs_only['lines-between-class-members'][0],
    coreRules_extensibleWithTs_only['lines-between-class-members'][1],
    {
      ...coreRules_extensibleWithTs_only['lines-between-class-members'][2],
      exceptAfterOverload: true,
    },
  ],
  '@typescript-eslint/no-array-constructor': coreRules_extensibleWithTs_only['no-array-constructor'],
  // ts(2300), ts(2393)
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-duplicate-imports': coreRules_extensibleWithTs_only['no-duplicate-imports'],
  '@typescript-eslint/no-empty-function': [
    coreRules_extensibleWithTs_only['no-empty-function'][0],
    {
      allow: [
        ...coreRules_extensibleWithTs_only['no-empty-function'][1].allow,
        'decoratedFunctions',
      ],
    },
  ],
  '@typescript-eslint/no-extra-parens': coreRules_extensibleWithTs_only['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': coreRules_extensibleWithTs_only['no-extra-semi'],
  '@typescript-eslint/no-loop-func': coreRules_extensibleWithTs_only['no-loop-func'],
  '@typescript-eslint/no-loss-of-precision': coreRules_extensibleWithTs_only['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': coreRules_extensibleWithTs_only['no-magic-numbers'],
  // ts(2451)
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-shadow': coreRules_extensibleWithTs_only['no-shadow'],
  '@typescript-eslint/no-unused-vars': coreRules_extensibleWithTs_only['no-unused-vars'],
  /**
   * rule may produce issues in some cases
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
   */
  '@typescript-eslint/no-use-before-define': coreRules_extensibleWithTs_only['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': coreRules_extensibleWithTs_only['no-useless-constructor'],
  '@typescript-eslint/padding-line-between-statements': coreRules_extensibleWithTs_only['padding-line-between-statements'],
  '@typescript-eslint/quotes': coreRules_extensibleWithTs_only['quotes'],
  '@typescript-eslint/space-before-function-paren':
    coreRules_extensibleWithTs_only['space-before-function-paren'],
  '@typescript-eslint/space-infix-ops': coreRules_extensibleWithTs_only['space-infix-ops'],
};

const tsRules_extension_typeCheck = {
  '@typescript-eslint/dot-notation': [
    coreRules_extensibleWithTs_only['dot-notation'][0],
    {
      ...coreRules_extensibleWithTs_only['dot-notation'][1],
      allowIndexSignaturePropertyAccess: false,
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/no-implied-eval': coreRules_extensibleWithTs_only['no-implied-eval'],
  '@typescript-eslint/no-throw-literal': coreRules_extensibleWithTs_only['no-throw-literal'],
  '@typescript-eslint/require-await': coreRules_extensibleWithTs_only['require-await'],
  // different name: 'no-return-await' -> 'return-await'
  '@typescript-eslint/return-await': [
    coreRules_extensibleWithTs_only['no-return-await'],
    'in-try-catch',
  ],
};

module.exports = {
  tsRules_extension_regular,
  tsRules_extension_typeCheck,
};
