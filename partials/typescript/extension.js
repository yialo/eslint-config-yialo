'use strict';

const { extensibleRules } = require('../main');
const { createRuleExtender } = require('../utils');

const extendTsRule = createRuleExtender(extensibleRules);

const regularRules = {
  '@typescript-eslint/brace-style': extensibleRules['brace-style'],
  '@typescript-eslint/comma-spacing': extensibleRules['comma-spacing'],
  '@typescript-eslint/default-param-last': extensibleRules['default-param-last'],
  '@typescript-eslint/func-call-spacing': extensibleRules['func-call-spacing'],
  // TODO: enable when rule would be fixed
  // '@typescript-eslint/indent': extensibleRules.indent,
  '@typescript-eslint/init-declarations': extensibleRules['init-declarations'],
  '@typescript-eslint/keyword-spacing': extensibleRules['keyword-spacing'],
  '@typescript-eslint/lines-between-class-members': extendTsRule('lines-between-class-members', {
    exceptAfterOverload: true,
  }),
  '@typescript-eslint/no-array-constructor': extensibleRules['no-array-constructor'],
  '@typescript-eslint/no-dupe-class-members': 'off',
  '@typescript-eslint/no-empty-function': extendTsRule('no-empty-function', {
    allow: [
      'arrowFunctions',
      'decoratedFunctions',
      'functions',
      'methods',
    ],
  }),
  '@typescript-eslint/no-extra-parens': extensibleRules['no-extra-parens'],
  '@typescript-eslint/no-extra-semi': extensibleRules['no-extra-semi'],
  '@typescript-eslint/no-invalid-this': extensibleRules['no-invalid-this'],
  '@typescript-eslint/no-loss-of-precision': extensibleRules['no-loss-of-precision'],
  '@typescript-eslint/no-magic-numbers': extendTsRule('no-magic-numbers', {
    ignoreEnums: false,
    ignoreNumericLiteralTypes: false,
    ignoreReadonlyClassProperties: false,
  }),
  '@typescript-eslint/no-unused-expressions': extensibleRules['no-unused-expressions'],
  // TODO: enable when rule would be fixed
  // '@typescript-eslint/no-unused-vars': extensibleRules['no-unused-vars'],
  // TODO: enable when rule would be fixed
  // '@typescript-eslint/no-use-before-define': extensibleRules['no-use-before-define'],
  '@typescript-eslint/no-useless-constructor': extensibleRules['no-useless-constructor'],
  '@typescript-eslint/quotes': extensibleRules.quotes,
  '@typescript-eslint/semi': extensibleRules.semi,
  '@typescript-eslint/space-before-function-paren': extensibleRules['space-before-function-paren'],
};

const typeCheckRules = {
  '@typescript-eslint/dot-notation': extendTsRule('dot-notation', {
    allowPrivateClassPropertyAccess: false,
  }),
  '@typescript-eslint/require-await': extensibleRules['require-await'],
  '@typescript-eslint/return-await': extendTsRule('no-return-await', 'in-try-catch'),
};

module.exports = {
  regularRules,
  typeCheckRules,
};
