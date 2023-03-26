'use strict';

const coreRules_nonExtensible = {
  'accessor-pairs': 'off',
  'array-bracket-newline': ['error', 'consistent'],
  'array-bracket-spacing': [
    'error',
    'never',
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      checkForEach: true,
    },
  ],
  'array-element-newline': ['error', 'consistent'],
  'arrow-body-style': 'off',
  'arrow-parens': [
    'error',
    'always',
    {
      requireForBlockBody: undefined,
    },
  ],
  'arrow-spacing': [
    'error',
    {
      after: true,
      before: true,
    },
  ],
  'block-scoped-var': 'error',
  'block-spacing': ['error', 'always'],
  'camelcase': 'off',
  'capitalized-comments': 'off',
  'class-methods-use-this': 'off',
  'comma-style': [
    'error',
    'last',
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        NewExpression: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
      },
    },
  ],
  'complexity': 'off',
  'computed-property-spacing': [
    'error',
    'never',
    {
      enforceForClassMembers: true,
    },
  ],
  'consistent-return': 'off',
  'consistent-this': 'off',
  'curly': ['error', 'multi-line'],
  'default-case': [
    'error',
    {
      commentPattern: '^no default$',
    },
  ],
  'default-case-last': 'error',
  'dot-location': ['error', 'property'],
  'eol-last': ['error', 'always'],
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
  'function-paren-newline': ['error', 'consistent'],
  'generator-star-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],
  'guard-for-in': 'error',
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'implicit-arrow-linebreak': ['error', 'beside'],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': [
    'error',
    {
      afterColon: true,
      beforeColon: false,
    },
  ],
  'line-comment-position': 'off',
  'linebreak-style': ['error', 'unix'],
  'lines-around-comment': 'off',
  'max-classes-per-file': 'off',
  'max-depth': 'off',
  'max-len': [
    'error',
    {
      code: 100,
      comments: 100,
      ignoreComments: true,
      ignorePattern: undefined,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: false,
      ignoreUrls: true,
      tabWidth: 4,
    },
  ],
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
  'new-parens': 'error',
  'newline-per-chained-call': [
    'error',
    {
      ignoreChainWithDepth: 4,
    },
  ],
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
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
      onlyOneSimpleParam: false,
    },
  ],
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
  'no-floating-decimal': 'error',
  'no-global-assign': ['error', { exceptions: [] }],
  'no-implicit-coercion': 'off',
  'no-implicit-globals': 'off',
  'no-inline-comments': 'off',
  'no-inner-declarations': 'error',
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
  'no-mixed-operators': [
    'error',
    {
      allowSamePrecedence: false,
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
    },
  ],
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': ['error', { ignoreNonDeclaration: false }],
  'no-multi-spaces': [
    'error',
    {
      exceptions: {},
      ignoreEOLComments: false,
    },
  ],
  'no-multi-str': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 2,
      maxBOF: 0,
      maxEOF: 0,
    },
  ],
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
    'isFinite',
    'isNaN',
    'addEventListener',
    'blur',
    'close',
    'closed',
    'confirm',
    'defaultStatus',
    'defaultstatus',
    'event',
    'external',
    'find',
    'focus',
    'frameElement',
    'frames',
    'history',
    'innerHeight',
    'innerWidth',
    'length',
    'location',
    'locationbar',
    'menubar',
    'moveBy',
    'moveTo',
    'name',
    'onblur',
    'onerror',
    'onfocus',
    'onload',
    'onresize',
    'onunload',
    'open',
    'opener',
    'opera',
    'outerHeight',
    'outerWidth',
    'pageXOffset',
    'pageYOffset',
    'parent',
    'print',
    'removeEventListener',
    'resizeBy',
    'resizeTo',
    'screen',
    'screenLeft',
    'screenTop',
    'screenX',
    'screenY',
    'scroll',
    'scrollbars',
    'scrollBy',
    'scrollTo',
    'scrollX',
    'scrollY',
    'self',
    'status',
    'statusbar',
    'stop',
    'toolbar',
    'top',
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
      message: 'Please use Number.isFinite instead',
      object: 'global',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'self',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isFinite instead',
      object: 'window',
      property: 'isFinite',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'global',
      property: 'isNaN',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'self',
      property: 'isNaN',
    },
    {
      message: 'Please use Number.isNaN instead',
      object: 'window',
      property: 'isNaN',
    },
    {
      message: 'Please use Object.defineProperty instead.',
      property: '__defineGetter__',
    },
    {
      message: 'Please use Object.defineProperty instead.',
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
  'no-tabs': ['error', { allowIndentationTabs: false }],
  'no-template-curly-in-string': 'off',
  'no-ternary': 'off',
  'no-trailing-spaces': [
    'error',
    {
      ignoreComments: true,
      skipBlankLines: false,
    },
  ],
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-underscore-dangle': 'off',
  'no-unexpected-multiline': 'error',
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
  'no-whitespace-before-property': 'error',
  'no-with': 'error',
  'nonblock-statement-body-position': ['error', 'beside'],
  'object-curly-newline': [
    'error',
    {
      consistent: true,
      multiline: true,
    },
  ],
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: true,
      allowMultiplePropertiesPerLine: false,
    },
  ],
  'object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'one-var': ['error', 'never'],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment': ['error', 'always'],
  'operator-linebreak': [
    'error',
    'before',
    {
      overrides: {
        '=': 'none',
      },
    },
  ],
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    },
    {
      allowSingleLineBlocks: undefined,
    },
  ],
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
  'radix': 'error',
  'require-atomic-updates': ['error', { allowProperties: false }],
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  'rest-spread-spacing': ['error', 'never'],
  'semi-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  'semi-style': ['error', 'last'],
  'sort-imports': 'off',
  'sort-keys': 'off',
  'sort-vars': 'off',
  'space-in-parens': ['error', 'never', { exceptions: [] }],
  'space-unary-ops': [
    'error',
    {
      nonwords: false,
      words: true,
    },
  ],
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
    },
  ],
  'strict': ['error', 'safe'],
  'switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  'symbol-description': 'error',
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'use-isnan': 'error',
  'vars-on-top': 'error',
  'wrap-iife': [
    'error',
    'outside',
    {
      functionPrototypeMethods: false,
    },
  ],
  'wrap-regex': 'off',
  'yield-star-spacing': ['error', 'after'],
  'yoda': 'error',
};

module.exports = {
  coreRules_nonExtensible,
};
