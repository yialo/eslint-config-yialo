# Yialo's ESLint configuration

Package created to use with **React + TypeScript + webpack** stack.

## Installation

```shell
npm install -DE eslint-config-yialo
```

```shell
yarn add eslint-config-yialo -DE
```

## Uninstallation

```shell
npm uninstall -DE eslint-config-yialo
```

```shell
yarn remove eslint-config-yialo -DE
```

## Peer dependencies

Notice that the package requires these peer dependencies:

* [@babel/core](https://www.npmjs.com/package/@babel/core)
* [typescript](https://www.npmjs.com/package/typescript)

You may install them quickly with this command:

```shell
npm install -DE @babel/core typescript
```

```shell
yarn add @babel/core typescript -DE
```

Command for quick removal of them:

```shell
npm uninstall -D @babel/core typescript
```

```shell
yarn remove @babel/core typescript -D
```

## Presets

This package contains several configuration presets for [ESLint](https://github.com/eslint/eslint):

Presets may be used at high-level of config as well as `extends` of `overrides` blocks:

* `presets/node`
* `presets/web-react-babel`
* `presets/web-react-babel-jest`
* `presets/web-react-ts-check`
* `presets/web-react-ts-check-jest`
* `presets/web-react-ts-nocheck`
* `presets/web-react-ts-nocheck-jest`

## Possible caveats

### Custom resolver

In case of any [webpack](https://webpack.js.org/)-based preset usage you MUST define `import/resolver` explicitly in `settings` section for correct applying of aliases and extensions from `webpack.resolve` config block.

Usage with [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack):

```js
// .eslintrc.js
settings: {
  'import/resolver': {
    webpack: {
      config: './config/webpack.config.js',
      env: {
        target: 'development',
      },
    },
  },
},
```

Usage with [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript):

```js
// .eslintrc.js
settings: {
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: './tsconfig.json',
    },
  },
},
```

Usage with Node resolver (default):

```js
// .eslintrc.js
settings: {
  'import/resolver': 'node',
},
```

### Babel config

In case of `presets/web-react-babel` or `presets/web-react-babel-jest` usage when Babel config file is not located in the same directory as ESLint config or has non-standard name, you MUST define `babelOptions.configFile` parser option:

```js
parserOptions: {
  babelOptions: {
    configFile: './config/babel.config.js',
  },
},
```

### TypeScript config

In case of any [ts-check](https://github.com/typescript-eslint/typescript-eslint/blob/main/docs/linting/TYPED_LINTING.md)-based preset usage you MUST define `project` explicitly in `parserOptions` section for correct typechecking:

```js
parserOptions: {
  project: ['./tsconfig.json'],
},
```

## End-user config example

```js
// .eslintrc.js
'use strict';

const babelConfigMixin = {
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
    },
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js',
      },
    },
  },
};

const tsConfigMixin = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};

module.exports = {
  globals: {
    process: 'readonly',
  },
  ignorePatterns: [
    '*.html',
    '/dist/',
  ],
  overrides: [
    {
      files: [
        './*.js',
        './scripts/**/*.js',
      ],
      extends: ['yialo/presets/node'],
      settings: {
        'import/resolver': 'node',
      },
    },
    {
      files: ['./src/**/*.js?(x)'],
      extends: ['yialo/presets/web-react-babel'],
      ...babelConfigMixin,
    },
    {
      files: ['./src/**/*.{spec,test}.js?(x)'],
      extends: ['yialo/presets/web-react-babel-jest'],
      ...babelConfigMixin,
    },
    {
      files: ['./src/**/*.ts?(x)'],
      extends: ['yialo/presets/web-react-ts-check'],
      ...tsConfigMixin,
    },
    {
      files: ['./src/**/*.{spec,test}.ts?(x)'],
      extends: ['yialo/presets/web-react-ts-check-jest'],
      ...tsConfigMixin,
    },
  ],
};
```
