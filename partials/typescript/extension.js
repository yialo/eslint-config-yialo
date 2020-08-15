'use strict';

const regularRules = {
  '@typescript-eslint/no-array-constructor': 'error',
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
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  '@typescript-eslint/semi': ['error', 'always'],
};

const typeCheckRules = {

};

module.exports = {
  regularRules,
  typeCheckRules,
};
