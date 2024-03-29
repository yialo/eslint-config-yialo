'use strict';

const { getDisabledRuleSet } = require('./utils');


const nodeRules = {
  'node/handle-callback-err': 'off',
  'node/no-callback-literal': 'off',
  'node/no-exports-assign': 'error',
  'node/no-extraneous-import': 'error',
  'node/no-extraneous-require': 'error',
  'node/no-missing-import': 'error',
  'node/no-missing-require': 'error',
  'node/no-new-require': 'error',
  'node/no-path-concat': 'error',
  'node/no-process-exit': 'error',
  'node/no-unpublished-bin': 'off',
  'node/no-unpublished-import': 'off',
  'node/no-unpublished-require': 'off',
  'node/no-unsupported-features/es-builtins': 'error',
  'node/no-unsupported-features/es-syntax': 'error',
  'node/no-unsupported-features/node-builtins': 'error',
  'node/process-exit-as-throw': 'off',
  'node/shebang': 'error',
  'node/no-deprecated-api': 'error',
  'node/callback-return': 'off',
  'node/exports-style': ['error', 'module.exports'],
  'node/file-extension-in-import': ['error', 'always'],
  'node/global-require': 'off',
  'node/no-mixed-requires': 'off',
  'node/no-process-env': 'off',
  'node/no-restricted-import': 'off',
  'node/no-restricted-require': 'off',
  'node/no-sync': 'off',
  'node/prefer-global/buffer': 'off',
  'node/prefer-global/console': 'off',
  'node/prefer-global/process': 'off',
  'node/prefer-global/text-decoder': 'off',
  'node/prefer-global/text-encoder': 'off',
  'node/prefer-global/url-search-params': 'off',
  'node/prefer-global/url': 'off',
  'node/prefer-promises/dns': 'off',
  'node/prefer-promises/fs': 'off',
};

const nodeRules_OFF = getDisabledRuleSet(nodeRules);


module.exports = {
  nodeRules,
  nodeRules_OFF,
};
