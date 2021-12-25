'use strict';

const { coreRules_extensibleShared } = require('../core/extensible-shared');
const {
  coreRules_extensibleWithTs_nonTypeCheck,
  coreRules_extensibleWithTs_typeCheckOnly,
} = require('../core/extensible-ts');

const { getDisabledRuleSet } = require('../utils');


const tsRules_extension_nonTypeCheck = {
  /* Shared extension rules
   * ====================== */
  '@typescript-eslint/no-invalid-this': coreRules_extensibleShared['no-invalid-this'],
  '@typescript-eslint/no-unused-expressions': coreRules_extensibleShared['no-unused-expressions'],
  '@typescript-eslint/object-curly-spacing': coreRules_extensibleShared['object-curly-spacing'],
  '@typescript-eslint/semi': coreRules_extensibleShared['semi'],


  /* TypeScript-only extension rules
   * =============================== */
  '@typescript-eslint/brace-style': coreRules_extensibleWithTs_nonTypeCheck['brace-style'],
  '@typescript-eslint/comma-dangle': [
    coreRules_extensibleWithTs_nonTypeCheck['comma-dangle'][0],
    {
      ...coreRules_extensibleWithTs_nonTypeCheck['comma-dangle'][1],
      enums: 'always-multiline',
      generics: 'always-multiline',
      tuples: 'always-multiline',
    },
  ],
  '@typescript-eslint/comma-spacing': coreRules_extensibleWithTs_nonTypeCheck['comma-spacing'],
  // ts(1016)
  '@typescript-eslint/default-param-last': 'off',
  '@typescript-eslint/func-call-spacing': coreRules_extensibleWithTs_nonTypeCheck['func-call-spacing'],
  /**
   * rule may produce issues in some cases
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
   */
  '@typescript-eslint/indent': coreRules_extensibleWithTs_nonTypeCheck['indent'],
  '@typescript-eslint/init-declarations': coreRules_extensibleWithTs_nonTypeCheck['init-declarations'],
  '@typescript-eslint/keyword-spacing': coreRules_extensibleWithTs_nonTypeCheck['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': [
    coreRules_extensibleWithTs_nonTypeCheck['lines-between-class-members'][0],
    coreRules_extensibleWithTs_nonTypeCheck['lines-between-class-members'][1],
    {
      ...coreRules_extensibleWithTs_nonTypeCheck['lines-between-class-members'][2],
      exceptAfterOverload: true,
    },
  ],
  '@typescript-eslint/no-array-constructor': coreRules_extensibleWithTs_nonTypeCheck['no-array-constructor'],
  // ts(2300), ts(2393)
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-duplicate-imports': coreRules_extensibleWithTs_nonTypeCheck['no-duplicate-imports'],
  '@typescript-eslint/no-empty-function': [
    coreRules_extensibleWithTs_nonTypeCheck['no-empty-function'][0],
    {
      allow: [
        ...coreRules_extensibleWithTs_nonTypeCheck['no-empty-function'][1].allow,
        'decoratedFunctions',
      ],
    },
  ],
  '@typescript-eslint/no-extra-parens': coreRules_extensibleWithTs_nonTypeCheck['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': coreRules_extensibleWithTs_nonTypeCheck['no-extra-semi'],
  '@typescript-eslint/no-loop-func': coreRules_extensibleWithTs_nonTypeCheck['no-loop-func'],
  '@typescript-eslint/no-loss-of-precision': coreRules_extensibleWithTs_nonTypeCheck['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': coreRules_extensibleWithTs_nonTypeCheck['no-magic-numbers'],
  // ts(2451)
  '@typescript-eslint/no-redeclare': 'off',
  '@typescript-eslint/no-restricted-imports': coreRules_extensibleWithTs_nonTypeCheck['no-restricted-imports'],
  '@typescript-eslint/no-shadow': coreRules_extensibleWithTs_nonTypeCheck['no-shadow'],
  '@typescript-eslint/no-unused-vars': coreRules_extensibleWithTs_nonTypeCheck['no-unused-vars'],
  /**
   * rule may produce issues in some cases
   * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
   */
  '@typescript-eslint/no-use-before-define': coreRules_extensibleWithTs_nonTypeCheck['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': coreRules_extensibleWithTs_nonTypeCheck['no-useless-constructor'],
  '@typescript-eslint/padding-line-between-statements': coreRules_extensibleWithTs_nonTypeCheck['padding-line-between-statements'],
  '@typescript-eslint/quotes': coreRules_extensibleWithTs_nonTypeCheck['quotes'],
  '@typescript-eslint/space-before-function-paren':
    coreRules_extensibleWithTs_nonTypeCheck['space-before-function-paren'],
  '@typescript-eslint/space-infix-ops': coreRules_extensibleWithTs_nonTypeCheck['space-infix-ops'],
};

const tsRules_extension_nonTypeCheck_OFF = getDisabledRuleSet(tsRules_extension_nonTypeCheck);

const tsRules_extension_typeCheckOnly = {
  '@typescript-eslint/dot-notation': coreRules_extensibleWithTs_typeCheckOnly['dot-notation'],
  '@typescript-eslint/no-implied-eval': coreRules_extensibleWithTs_typeCheckOnly['no-implied-eval'],
  '@typescript-eslint/no-throw-literal': [
    coreRules_extensibleWithTs_typeCheckOnly['no-throw-literal'],
    {
      allowThrowingAny: true,
      allowThrowingUnknown: true,
    },
  ],
  '@typescript-eslint/require-await': coreRules_extensibleWithTs_typeCheckOnly['require-await'],
  // different name: 'no-return-await' -> 'return-await'
  '@typescript-eslint/return-await': [
    coreRules_extensibleWithTs_typeCheckOnly['no-return-await'],
    'in-try-catch',
  ],
};

const tsRules_extension_typeCheckOnly_OFF = getDisabledRuleSet(tsRules_extension_typeCheckOnly);


module.exports = {
  tsRules_extension_nonTypeCheck,
  tsRules_extension_nonTypeCheck_OFF,

  tsRules_extension_typeCheckOnly,
  tsRules_extension_typeCheckOnly_OFF,
};
