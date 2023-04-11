'use strict';

const { getDisabledRuleSet } = require('../_utils');

const tsRules_own_nonTypeCheck = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': 'allow-with-description',
      'ts-nocheck': 'allow-with-description',
      'ts-check': false,
      'minimumDescriptionLength': 6,
    },
  ],
  '@typescript-eslint/ban-tslint-comment': 'off',
  '@typescript-eslint/ban-types': ['error', {}],
  '@typescript-eslint/class-literal-property-style': 'off',
  '@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      disallowTypeAnnotations: true,
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': 'off',
  '@typescript-eslint/no-confusing-non-null-assertion': 'off',
  '@typescript-eslint/no-duplicate-enum-values': 'warn',
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-invalid-void-type': 'off',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-this-alias': [
    'error',
    {
      allowDestructuring: true,
      allowedNames: [],
    },
  ],
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-useless-empty-export': 'off',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/prefer-literal-enum-member': 'off',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-return-this-type': 'off',
  '@typescript-eslint/prefer-ts-expect-error': 'off',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/type-annotation-spacing': 'off',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unified-signatures': 'off',
};

const tsRules_own_nonTypeCheck_OFF = getDisabledRuleSet(
  tsRules_own_nonTypeCheck,
);

const tsRules_own_typeCheckOnly_nonExtensible = {
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/consistent-type-exports': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-base-to-string': 'off',
  '@typescript-eslint/no-confusing-void-expression': 'off',
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreIIFE: false,
      ignoreVoid: true,
    },
  ],
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-meaningless-void-operator': 'off',
  '@typescript-eslint/no-misused-promises': 'error',
  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
  '@typescript-eslint/no-unnecessary-condition': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'off',
  '@typescript-eslint/no-unnecessary-type-arguments': 'off',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/prefer-includes': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': 'off',
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    {
      allowAny: false,
      checkCompoundAssignments: true,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': 'error',
  '@typescript-eslint/sort-type-union-intersection-members': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': 'off',
};

const tsRules_own_typeCheckOnly_nonExtensible_OFF = getDisabledRuleSet(
  tsRules_own_typeCheckOnly_nonExtensible,
);

const tsRules_own_typeCheckOnly_extensibleWithJest = {
  '@typescript-eslint/unbound-method': 'error',
};

const tsRules_own_typeCheckOnly_extensibleWithJest_OFF = getDisabledRuleSet(
  tsRules_own_typeCheckOnly_extensibleWithJest,
);

module.exports = {
  tsRules_own_nonTypeCheck,
  tsRules_own_nonTypeCheck_OFF,

  tsRules_own_typeCheckOnly_nonExtensible,
  tsRules_own_typeCheckOnly_nonExtensible_OFF,

  tsRules_own_typeCheckOnly_extensibleWithJest,
  tsRules_own_typeCheckOnly_extensibleWithJest_OFF,
};
