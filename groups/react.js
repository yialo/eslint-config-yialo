'use strict';

const rules = {
  'jsx-a11y/accessible-emoji': 'error',
  'jsx-a11y/alt-text': [
    'error',
    {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
    },
  ],
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    },
  ],
  'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-proptypes': 'error',
  'jsx-a11y/aria-role': [
    'error',
    {
      ignoreNonDom: false,
    },
  ],
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/autocomplete-valid': 'off',
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/control-has-associated-label': [
    'error',
    {
      depth: 5,
      ignoreElements: ['audio', 'canvas', 'embed', 'input', 'textarea', 'tr', 'video'],
      ignoreRoles: [
        'grid',
        'listbox',
        'menu',
        'menubar',
        'radiogroup',
        'row',
        'tablist',
        'toolbar',
        'tree',
        'treegrid',
      ],
      labelAttributes: ['label'],
    },
  ],
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/iframe-has-title': 'error',
  'jsx-a11y/img-redundant-alt': 'error',
  'jsx-a11y/interactive-supports-focus': 'error',
  'jsx-a11y/label-has-associated-control': [
    'error',
    {
      assert: 'either',
      depth: 25,
    },
  ],
  'jsx-a11y/lang': 'error',
  'jsx-a11y/media-has-caption': 'error',
  'jsx-a11y/mouse-events-have-key-events': 'error',
  'jsx-a11y/no-access-key': 'error',
  'jsx-a11y/no-autofocus': [
    'error',
    {
      ignoreNonDOM: true,
    },
  ],
  'jsx-a11y/no-distracting-elements': [
    'error',
    {
      elements: ['marquee', 'blink'],
    },
  ],
  'jsx-a11y/no-interactive-element-to-noninteractive-role': [
    'error',
    {
      tr: ['none', 'presentation'],
    },
  ],
  'jsx-a11y/no-noninteractive-element-interactions': [
    'error',
    {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    },
  ],
  'jsx-a11y/no-noninteractive-element-to-interactive-role': [
    'error',
    {
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      table: ['grid'],
      td: ['gridcell'],
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
    },
  ],
  'jsx-a11y/no-noninteractive-tabindex': [
    'error',
    {
      roles: ['tabpanel'],
    },
  ],
  'jsx-a11y/no-onchange': 'error',
  'jsx-a11y/no-redundant-roles': 'error',
  'jsx-a11y/no-static-element-interactions': [
    'error',
    {
      handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
    },
  ],
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
  'jsx-a11y/scope': 'error',
  'jsx-a11y/tabindex-no-positive': 'error',
  'react-hooks/exhaustive-deps': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react/boolean-prop-naming': 'off',
  'react/button-has-type': 'off',
  'react/default-props-match-prop-types': [
    'error',
    {
      allowRequiredDefaults: false,
    },
  ],
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
  'react/jsx-curly-brace-presence': [
    'error',
    {
      children: 'never',
      props: 'never',
    },
  ],
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
      extensions: ['.jsx', '.tsx'],
    },
  ],
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'react/jsx-fragments': ['error', 'element'],
  'react/jsx-handler-names': 'off',
  'react/jsx-indent': ['error', 2],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
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
  'react/no-children-prop': 'error',
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
  'react/no-unused-prop-types': [
    'error',
    {
      skipShapeProps: true,
    },
  ],
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-read-only-props': 'off',
  'react/prefer-stateless-function': [
    'error',
    {
      ignorePureComponents: true,
    },
  ],
  'react/prop-types': [
    'error',
    {
      skipUndeclared: false,
    },
  ],
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

const settings = {
  react: {
    version: 'detect',
  },
};

module.exports = {
  rules,
  settings,
};
