'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const confusingBrowserGlobalsRestrictions = confusingBrowserGlobals.map(
  (browserGlobal) => ({
    name: browserGlobal,
    message: `Use window.${browserGlobal} instead.`,
  }),
);

const GLOBALS_MOVED_TO_NUMBER = [
  'isFinite',
  'isNaN',
  'NaN',
  'parseInt',
  'parseFloat',
];

const getNumberPropsRestriction = (numberRelatedGlobal) =>
  `Please use Number.${numberRelatedGlobal} instead.`;

const numberRelatedGlobalsRestrictions = GLOBALS_MOVED_TO_NUMBER.map(
  (numberRelatedGlobal) => ({
    name: numberRelatedGlobal,
    message: getNumberPropsRestriction(numberRelatedGlobal),
  }),
);

const RESTRICTED_PROPERTY_TO_MESSAGE = {
  IS_FINITE: getNumberPropsRestriction('isFinite'),
  IS_NAN: getNumberPropsRestriction('isNaN'),
  DEFINE_GETTER_SETTER: 'Please use Object.defineProperty instead.',
};

const coreRules_nonExtensible = {
  'accessor-pairs': 'off',
  'array-bracket-newline': 'off',
  'array-bracket-spacing': 'off',
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      checkForEach: true,
    },
  ],
  'array-element-newline': 'off',
  'arrow-body-style': 'off',
  'arrow-parens': 'off',
  'arrow-spacing': 'off',
  'block-scoped-var': 'error',
  'block-spacing': 'off',
  'camelcase': 'off',
  'capitalized-comments': 'off',
  'class-methods-use-this': 'off',
  'comma-style': 'off',
  'complexity': 'off',
  'computed-property-spacing': 'off',
  'consistent-return': 'off',
  'consistent-this': 'off',
  'curly': 'off',
  'default-case': [
    'error',
    {
      commentPattern: '^no default$',
    },
  ],
  'default-case-last': 'error',
  'dot-location': 'off',
  'eol-last': 'off',
  'eqeqeq': [
    'error',
    'always',
    {
      null: 'ignore',
    },
  ],
  'for-direction': 'error',
  'func-name-matching': 'off',
  'func-names': 'off',
  'func-style': 'off',
  'function-call-argument-newline': 'off',
  'function-paren-newline': 'off',
  'generator-star-spacing': 'off',
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': 'error',
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'implicit-arrow-linebreak': 'off',
  'jsx-quotes': 'off',
  'key-spacing': 'off',
  'line-comment-position': 'off',
  'linebreak-style': 'off',
  'lines-around-comment': 'off',
  'max-classes-per-file': 'off',
  'max-depth': 'off',
  'max-len': 'off',
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': 'off',
  'max-params': 'off',
  'max-statements': 'off',
  'max-statements-per-line': [
    'error',
    {
      max: 1,
    },
  ],
  'multiline-comment-style': 'off',
  'multiline-ternary': 'off',
  'new-parens': 'off',
  'newline-per-chained-call': 'off',
  'no-alert': 'warn',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'error',
  'no-bitwise': [
    'error',
    {
      allow: ['~'],
      int32Hint: false,
    },
  ],
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-confusing-arrow': 'off',
  'no-console': 'off',
  'no-constant-binary-expression': 'error',
  'no-constructor-return': 'error',
  'no-continue': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'warn',
  'no-delete-var': 'error',
  'no-div-regex': 'off',
  'no-dupe-else-if': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'off',
  'no-else-return': [
    'error',
    {
      allowElseIf: false,
    },
  ],
  'no-empty': ['error', { allowEmptyCatch: false }],
  'no-empty-character-class': 'error',
  'no-empty-pattern': 'error',
  'no-eq-null': 'off',
  'no-eval': ['error', { allowIndirect: false }],
  'no-ex-assign': 'error',
  'no-extend-native': ['error', { exceptions: [] }],
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: false }],
  'no-extra-label': 'error',
  'no-fallthrough': ['error', { commentPattern: undefined }],
  'no-floating-decimal': 'off',
  'no-global-assign': ['error', { exceptions: [] }],
  'no-implicit-coercion': 'off',
  'no-implicit-globals': 'off',
  'no-inline-comments': 'off',
  'no-inner-declarations': ['error', 'both'],
  'no-invalid-regexp': ['error', { allowConstructorFlags: [] }],
  'no-irregular-whitespace': [
    'error',
    {
      skipComments: false,
      skipStrings: true,
      skipTemplates: false,
      skipRegExps: false,
    },
  ],
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': [
    'error',
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-misleading-character-class': 'error',
  'no-mixed-operators': 'off',
  'no-mixed-spaces-and-tabs': 'off',
  'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
  'no-multi-spaces': 'off',
  'no-multi-str': 'error',
  'no-multiple-empty-lines': 'off',
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-object': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-globals': [
    'error',
    ...confusingBrowserGlobalsRestrictions,
    ...numberRelatedGlobalsRestrictions,
  ],
  'no-restricted-exports': 'off',
  'no-restricted-properties': [
    'error',
    {
      message: 'arguments.callee is deprecated',
      object: 'arguments',
      property: 'callee',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.IS_FINITE,
      object: 'global',
      property: 'isFinite',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.IS_FINITE,
      object: 'self',
      property: 'isFinite',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.IS_FINITE,
      object: 'window',
      property: 'isFinite',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.IS_NAN,
      object: 'global',
      property: 'isNaN',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.IS_NAN,
      object: 'self',
      property: 'isNaN',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.IS_NAN,
      object: 'window',
      property: 'isNaN',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.DEFINE_GETTER_SETTER,
      property: '__defineGetter__',
    },
    {
      message: RESTRICTED_PROPERTY_TO_MESSAGE.DEFINE_GETTER_SETTER,
      property: '__defineSetter__',
    },
    {
      message: 'Use the exponentiation operator (**) instead.',
      object: 'Math',
      property: 'pow',
    },
  ],
  'no-restricted-syntax': [
    'error',
    {
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      selector: 'LabeledStatement',
    },
    {
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      selector: 'WithStatement',
    },
  ],
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': [
    'error',
    {
      props: true,
    },
  ],
  'no-self-compare': 'error',
  'no-sequences': [
    'error',
    {
      allowInParentheses: true,
    },
  ],
  'no-shadow-restricted-names': 'error',
  'no-sparse-arrays': 'error',
  'no-tabs': 'off',
  'no-template-curly-in-string': 'off',
  'no-ternary': 'off',
  'no-trailing-spaces': 'off',
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-underscore-dangle': 'off',
  'no-unexpected-multiline': 'off',
  'no-unmodified-loop-condition': 'off',
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],
  'no-unreachable-loop': ['error', { ignore: [] }],
  'no-unsafe-finally': 'error',
  'no-unsafe-optional-chaining': [
    'error',
    {
      disallowArithmeticOperators: true,
    },
  ],
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'off',
  'no-useless-catch': 'error',
  'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
    },
  ],
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': 'off',
  'no-warning-comments': 'off',
  'no-whitespace-before-property': 'off',
  'no-with': 'error',
  'nonblock-statement-body-position': 'off',
  'object-curly-newline': 'off',
  'object-property-newline': 'off',
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      avoidExplicitReturnArrows: false,
      ignoreConstructors: false,
    },
  ],
  'one-var': [
    'error',
    {
      var: 'never',
      let: 'never',
      const: 'never',
      separateRequires: true,
    },
  ],
  'one-var-declaration-per-line': 'off',
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': 'off',
  'padded-blocks': 'off',
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
    'error',
    {
      AssignmentExpression: {
        array: false,
        object: true,
      },
      VariableDeclarator: {
        array: false,
        object: true,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'off',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'off',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true,
    },
  ],
  'prefer-regex-literals': 'off',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'quote-props': 'off',
  'radix': ['error', 'always'],
  'require-atomic-updates': ['error', { allowProperties: false }],
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  'rest-spread-spacing': 'off',
  'semi-spacing': 'off',
  'semi-style': 'off',
  'sort-imports': 'off',
  'sort-keys': 'off',
  'sort-vars': 'off',
  'space-in-parens': 'off',
  'space-unary-ops': 'off',
  'spaced-comment': [
    'error',
    'always',
    {
      block: {
        balanced: true,
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'],
      },
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!'],
      },
      exceptions: [],
      markers: [],
    },
  ],
  'strict': ['error', 'safe'],
  'switch-colon-spacing': 'off',
  'symbol-description': 'error',
  'template-curly-spacing': 'off',
  'template-tag-spacing': 'off',
  'unicode-bom': 'off',
  'use-isnan': [
    'error',
    {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    },
  ],
  'vars-on-top': 'error',
  'wrap-iife': 'off',
  'wrap-regex': 'off',
  'yield-star-spacing': 'off',
  'yoda': [
    'error',
    'never',
    {
      exceptRange: false,
      onlyEquality: false,
    },
  ],
};

module.exports = {
  coreRules_nonExtensible,
};
