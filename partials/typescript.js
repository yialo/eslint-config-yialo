'use strict';

const extensionRules = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/ban-ts-comment': 'error',
  '@typescript-eslint/ban-types': 'error',
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
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
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extra-semi': 'error',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'warn',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/semi': ['error', 'always'],
  '@typescript-eslint/triple-slash-reference': 'error',
};

const ownRules = {
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/await-thenable': 'error',
};

module.exports = {
  tsRules: {
    ...extensionRules,
    ...ownRules,
  },
};
