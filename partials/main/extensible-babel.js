'use strict';

const babelExtensibleRules = {
  'camelcase': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreGlobals: true,
      ignoreImports: false,
      properties: 'never',
    },
  ],
  'new-cap': [
    'error',
    {
      capIsNew: false,
      newIsCap: true,
    },
  ],
  'no-invalid-this': 'off',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTaggedTemplates: false,
      allowTernary: false,
    },
  ],
  'object-curly-spacing': ['error', 'always'],
  'quotes': [
    'error',
    'single',
    {
      allowTemplateLiterals: true,
    },
  ],
};

const babelResetRules = {
  'semi': 'off',
};

module.exports = {
  babelExtensibleRules,
  babelResetRules,
};
