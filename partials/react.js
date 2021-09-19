'use strict';

const { getDisabledRuleSet } = require('./utils');

const reactRules = {
  'react/boolean-prop-naming': 'off',
  'react/button-has-type': 'off',
  'react/default-props-match-prop-types': 'off',
  'react/destructuring-assignment': 'off',
  'react/display-name': 'off',
  'react/forbid-component-props': 'off',
  'react/forbid-dom-props': 'off',
  'react/forbid-elements': 'off',
  'react/forbid-foreign-prop-types': 'off',
  'react/forbid-prop-types': 'off',
  'react/function-component-definition': 'off',
  'react/jsx-boolean-value': ['error', 'never'],
  'react/jsx-child-element-spacing': 'off',
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': 'off',
  'react/jsx-curly-newline': [
    'error',
    {
      multiline: 'consistent',
      singleline: 'consistent',
    },
  ],
  'react/jsx-curly-spacing': [
    'error',
    {
      when: 'never',
      children: true,
      allowMultiline: true,
    },
  ],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-filename-extension': [
    'error',
    {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
    },
  ],
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': 'off',
  'react/jsx-indent': [
    'error',
    2,
    {
      indentLogicalExpressions: true,
    },
  ],
  'react/jsx-indent-props': [
    'error',
    {
      ignoreTernaryOperator: false,
      indentMode: 2,
    },
  ],
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
    },
  ],
  'react/jsx-max-depth': 'off',
  'react/jsx-max-props-per-line': [
    'error',
    {
      maximum: 1,
      when: 'multiline',
    },
  ],
  'react/jsx-newline': 'off',
  'react/jsx-no-bind': [
    'error',
    {
      allowArrowFunctions: true,
      allowBind: false,
      allowFunctions: false,
      ignoreDOMComponents: true,
      ignoreRefs: true,
    },
  ],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': [
    'error',
    {
      ignoreCase: true,
    },
  ],
  'react/jsx-no-literals': 'off',
  'react/jsx-no-script-url': 'error',
  'react/jsx-no-target-blank': [
    'error',
    {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      forms: false,
      links: true,
      warnOnSpreadAttributes: true,
    },
  ],
  'react/jsx-no-undef': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': [
    'error',
    {
      allow: 'single-child',
    },
  ],
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      allowLeadingUnderscore: false,
      allowNamespace: false,
    },
  ],
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-default-props': 'off',
  'react/jsx-sort-props': 'off',
  'react/jsx-tag-spacing': [
    'error',
    {
      afterOpening: 'never',
      beforeClosing: 'never',
      beforeSelfClosing: 'always',
      closingSlash: 'never',
    },
  ],
  'react/jsx-uses-react': 'error',
  'react/jsx-uses-vars': 'error',
  'react/jsx-wrap-multilines': [
    'error',
    {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line',
    },
  ],
  'react/no-access-state-in-setstate': 'error',
  'react/no-adjacent-inline-elements': 'off',
  'react/no-array-index-key': 'off',
  'react/no-children-prop': [
    'error',
    {
      allowFunctions: false,
    },
  ],
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': 'error',
  'react/no-did-mount-set-state': 'off',
  'react/no-did-update-set-state': 'off',
  'react/no-direct-mutation-state': 'error',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-multi-comp': 'off',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-string-refs': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unsafe': 'error',
  'react/no-unused-prop-types': 'off',
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-exact-props': 'off',
  'react/prefer-read-only-props': 'off',
  'react/prefer-stateless-function': [
    'error',
    {
      ignorePureComponents: true,
    },
  ],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'error',
  'react/require-default-props': [
    'error',
    {
      forbidDefaultForRequired: true,
    },
  ],
  'react/require-optimization': 'off',
  'react/require-render-return': 'error',
  'react/self-closing-comp': 'error',
  'react/sort-comp': [
    'error',
    {
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
        rendering: ['/^render.+$/', 'render'],
      },
      order: [
        'static-variables',
        'static-methods',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'instance-methods',
        'everything-else',
        'rendering',
      ],
    },
  ],
  'react/sort-prop-types': 'off',
  'react/state-in-constructor': ['error', 'never'],
  'react/static-property-placement': ['error', 'static public field'],
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
};

const reactSettings = {
  react: {
    version: 'detect',
  },
};

const reactRules_OFF = getDisabledRuleSet(reactRules);

module.exports = {
  reactRules,
  reactRules_OFF,
  reactSettings,
};
