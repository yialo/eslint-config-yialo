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

module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  parser: 'espree',
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['import'],
  rules: {
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
        checkForEach: true,
      },
    ],
    'block-scoped-var': 'error',
    'constructor-super': 'error',
    'default-case': [
      'error',
      {
        commentPattern: '^no default$',
      },
    ],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'for-direction': 'error',
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'new-cap': [
      'error',
      {
        capIsNew: false,
        capIsNewExceptionPattern: undefined,
        capIsNewExceptions: [],
        newIsCap: true,
        newIsCapExceptionPattern: undefined,
        newIsCapExceptions: [],
        properties: true,
      },
    ],
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': ['error', { allow: ['~'], int32Hint: false }],
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': ['error', { checkLoops: true }],
    'no-constructor-return': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'no-empty': ['error', { allowEmptyCatch: false }],
    'no-empty-character-class': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-empty-pattern': 'error',
    'no-eval': ['error', { allowIndirect: false }],
    'no-ex-assign': 'error',
    'no-extend-native': ['error', { exceptions: [] }],
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: false }],
    'no-extra-label': 'error',
    'no-fallthrough': [
      'error',
      { allowEmptyCase: false, commentPattern: undefined },
    ],
    'no-func-assign': 'error',
    'no-global-assign': ['error', { exceptions: [] }],
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
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
    'no-loop-func': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
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
    'no-redeclare': ['error', { builtinGlobals: true }],
    'no-regex-spaces': 'error',
    'no-restricted-globals': [
      'error',
      ...confusingBrowserGlobalsRestrictions,
      ...numberRelatedGlobalsRestrictions,
    ],
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
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: false,
      },
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'functions',
        allow: [],
        ignoreOnInitialization: false,
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef': [
      'error',
      {
        typeof: false,
      },
    ],
    'no-undef-init': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 'error',
    'no-unreachable-loop': ['error', { ignore: [] }],
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: false }],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTaggedTemplates: false,
        allowTernary: false,
      },
    ],
    'no-unused-labels': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: false,
        allowNamedExports: false,
      },
    ],
    'no-useless-backreference': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
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
    'no-with': 'error',
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        avoidExplicitReturnArrows: false,
        ignoreConstructors: false,
        methodsIgnorePattern: undefined,
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
    'operator-assignment': ['error', 'always'],
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
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'radix': ['error', 'always'],
    'require-atomic-updates': ['error', { allowProperties: false }],
    'require-await': 'error',
    'require-yield': 'error',
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
    'symbol-description': 'error',
    'use-isnan': [
      'error',
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: false,
      },
    ],
    'vars-on-top': 'error',
    'yoda': [
      'error',
      'never',
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],
    'import/default': 'error',
    'import/export': 'error',
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-cycle': 'error',
    'import/no-deprecated': 'error',
    'import/no-duplicates': [
      'error',
      {
        considerQueryString: true,
      },
    ],
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        amd: false,
        caseSensitive: true,
        caseSensitiveStrict: true,
        commonjs: true,
      },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
        noUselessIndex: false,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': 'error',
  },
  settings: {
    'import/ignore': ['node_modules'],
  },
};
