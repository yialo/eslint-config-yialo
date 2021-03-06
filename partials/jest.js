'use strict';

const baseJestRules = {
  'jest/consistent-test-it': 'off',
  'jest/expect-expect': 'error',
  'jest/lowercase-name': 'off',
  'jest/no-alias-methods': 'off',
  'jest/no-commented-out-tests': 'error',
  'jest/no-conditional-expect': 'error',
  'jest/no-deprecated-functions': 'error',
  'jest/no-disabled-tests': 'warn',
  'jest/no-done-callback': 'error',
  'jest/no-duplicate-hooks': 'off',
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-hooks': 'off',
  'jest/no-identical-title': 'error',
  'jest/no-if': 'off',
  'jest/no-interpolation-in-snapshots': 'error',
  'jest/no-jasmine-globals': 'error',
  'jest/no-jest-import': 'error',
  'jest/no-large-snapshots': 'off',
  'jest/no-mocks-import': 'error',
  'jest/no-restricted-matchers': 'off',
  'jest/no-standalone-expect': 'error',
  'jest/no-test-prefixes': 'error',
  'jest/no-test-return-statement': 'off',
  'jest/prefer-called-with': 'off',
  'jest/prefer-expect-assertions': 'off',
  'jest/prefer-hooks-on-top': 'off',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-strict-equal': 'off',
  'jest/prefer-to-be-null': 'off',
  'jest/prefer-to-be-undefined': 'off',
  'jest/prefer-to-contain': 'off',
  'jest/prefer-to-have-length': 'off',
  'jest/prefer-todo': 'off',
  'jest/require-to-throw-message': 'off',
  'jest/require-top-level-describe': 'off',
  'jest/valid-describe': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-expect': 'error',
  'jest/valid-title': 'error',
};

const tsCheckJestRules = {
  'jest/unbound-method': 'error',
};

module.exports = {
  baseJestRules,
  tsCheckJestRules,
};
