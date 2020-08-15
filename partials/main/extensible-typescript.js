'use strict';

const tsRegularExtensibleRules = {
  'constructor-super': 'error',
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'no-array-constructor': 'error',
  'no-const-assign': 'error',
  'no-dupe-args': 'error',
  'no-dupe-class-members': 'error',
  'no-dupe-keys': 'error',
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-extra-semi': 'error',
  'no-func-assign': 'error',
  'no-import-assign': 'error',
  'no-new-symbol': 'error',
  'no-obj-calls': 'error',
  'no-redeclare': 'error',
  'no-setter-return': 'error',
  'no-this-before-super': 'error',
  'no-undef': 'error',
  'no-unreachable': 'error',
  'no-unsafe-negation': 'error',
  'no-unused-vars': [
    'error',
    {
      args: 'after-used',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
};

const tsRegularResetRules = {
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-array-constructor': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-empty-function': 'off',
  'no-extra-semi': 'off',
  'no-func-assign': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'no-unused-vars': 'off',
  'semi': 'off',
  'valid-typeof': 'off',
};

const tsTypeCheckExtensibleRules = {
  'require-await': 'error',
};

const tsTypeCheckResetRules = {
  'require-await': 'off',
};

const tsExtensibleRules = {
  ...tsRegularExtensibleRules,
  ...tsTypeCheckExtensibleRules,
};

const tsResetRules = {
  ...tsRegularResetRules,
  ...tsTypeCheckResetRules,
};

module.exports = {
  tsExtensibleRules,
  tsResetRules,
};
