'use strict';

const { tsRules_own_typeCheckOnly_extensibleWithJest } = require('./typescript/own');

const { getDisabledRuleSet } = require('./utils');


const jestRules = {
  'jest/consistent-test-it': 'off',
  'jest/expect-expect': 'error',
  'jest/max-nested-describe': 'off',
  'jest/no-alias-methods': 'off',
  'jest/no-commented-out-tests': 'error',
  'jest/no-conditional-expect': 'error',
  'jest/no-conditional-in-test': 'error',
  'jest/no-deprecated-functions': 'error',
  'jest/no-disabled-tests': 'warn',
  'jest/no-done-callback': 'error',
  'jest/no-duplicate-hooks': 'off',
  'jest/no-export': 'error',
  'jest/no-focused-tests': 'error',
  'jest/no-hooks': 'off',
  'jest/no-identical-title': 'error',
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
  'jest/prefer-comparison-matcher': 'off',
  'jest/prefer-equality-matcher': 'off',
  'jest/prefer-expect-assertions': 'off',
  'jest/prefer-expect-resolves': 'off',
  'jest/prefer-hooks-on-top': 'off',
  'jest/prefer-lowercase-title': 'off',
  'jest/prefer-snapshot-hint': 'off',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-strict-equal': 'off',
  'jest/prefer-to-be': 'error',
  'jest/prefer-to-contain': 'off',
  'jest/prefer-to-have-length': 'off',
  'jest/prefer-todo': 'off',
  'jest/require-hook': 'off',
  'jest/require-to-throw-message': 'off',
  'jest/require-top-level-describe': 'off',
  'jest/valid-describe-callback': 'error',
  'jest/valid-expect-in-promise': 'error',
  'jest/valid-expect': 'error',
  'jest/valid-title': 'error',
};

const jestRules_OFF = getDisabledRuleSet(jestRules);

/**
 * This rule is extension of @typescript-eslint and MUST NOT be used outside its scope
 * @see https://github.com/jest-community/eslint-plugin-jest#typescript-rules
 */
const jestTsRules_typeCheckOnly = {
  'jest/unbound-method': tsRules_own_typeCheckOnly_extensibleWithJest['@typescript-eslint/unbound-method'],
};

const jestTsRules_typeCheckOnly_OFF = getDisabledRuleSet(
  jestTsRules_typeCheckOnly,
);


module.exports = {
  jestRules,
  jestRules_OFF,

  jestTsRules_typeCheckOnly,
  jestTsRules_typeCheckOnly_OFF,
};
