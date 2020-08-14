'use strict';

const disabledRules = {
  'babel/camelcase': 'off',
  'babel/new-cap': 'off',
  'babel/no-invalid-this': 'off',
  'babel/no-unused-expressions': 'off',
  'babel/object-curly-spacing': 'off',
  'babel/quotes': 'off',
  'babel/semi': 'off',
  'babel/valid-typeof': 'off',
};

const enabledRules = {
  'babel/semi': 'error',
};

module.exports = {
  disabledRules,
  enabledRules,
};
