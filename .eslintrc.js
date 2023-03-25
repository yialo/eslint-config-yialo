'use strict';

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
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
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
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true,
      },
    ],
    'constructor-super': 'error',
    'curly': ['error', 'multi-line'],
    'default-case': [
      'error',
      {
        commentPattern: '^no default$',
      },
    ],
    'default-case-last': 'error',
    'default-param-last': 'error',
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
    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'indent': [
      'error',
      2,
      {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ignoreComments: false,
        ignoredNodes: [],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: false,
        outerIIFEBody: 1,
        StaticBlock: {
          body: 1,
        },
        SwitchCase: 1,
        VariableDeclarator: 1,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': [
      'error',
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
        overrides: {
          case: {
            after: true,
          },
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
        },
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-classes-per-file': ['error', 1],
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
    'new-parens': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-alert': 'warn',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
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
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods'],
      },
    ],
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
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
    'no-multi-assign': 'error',
    'no-multi-spaces': [
      'error',
      {
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
    'no-tabs': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true,
        skipBlankLines: false,
      },
    ],
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
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
        args: 'after-used',
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
    'no-useless-computed-key': 'error',
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
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
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
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
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
    'quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'radix': 'error',
    'require-atomic-updates': ['error', { allowProperties: false }],
    'require-await': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error', { int32Hint: false }],
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
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'vars-on-top': 'error',
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    'yield-star-spacing': ['error', 'after'],
    'yoda': 'error',
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
