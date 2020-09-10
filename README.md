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

* [typescript](https://www.npmjs.com/package/typescript)

You may install them quickly with this command:

```shell
npm install -DE typescript
```

```shell
yarn add typescript -DE
```

Command for quick removal of them:

```shell
npm uninstall -D typescript
```

```shell
yarn remove typescript -D
```

## Presets

This package contains several configuration presets for [ESLint](https://github.com/eslint/eslint):

Presets may be used at high-level of config as well as `extends` of `overrides` blocks:

* `preset-base`
* `preset-node`
* `preset-web-babel`
* `preset-web-babel-jest`
* `preset-web-ts`
* `preset-web-ts-jest`
* `preset-web-ts-check`
* `preset-web-ts-check-jest`

## Usage caveats

### Custom resolver

In case of any [webpack](https://webpack.js.org/)-based preset usage you MUST define `import/resolver` explicitly in `settings` section for correct applying of aliases and extensions from `webpack.resolve` config block.

Basic example:

```js
// .eslintrc.js
settings: {
  'import/resolver': 'webpack',
},
```

Example of custom usage with [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack):

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

Node.js resolver (default):

```js
// .eslintrc.js
settings: {
  'import/resolver': 'node',
},
```

### TypeScript config

In case of any [ts-check](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md)-based preset usage you MUST define `tsconfigRootDir` and `project` explicitly in `parserOptions` section for correct typechecking:

```js
parserOptions: {
  tsconfigRootDir: __dirname,
  project: ['./tsconfig.json'],
},
```

## End-user config example

```js
// .eslintrc.js
module.exports = {
  extends: ['yialo/preset-webpack'],
  globals: {
    process: 'readonly',
  },
  ignorePatterns: [
    '*.html',
    '/dist/',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: [
        './**/*.{spec,test}.ts?(x)',
        './**/__tests__/**/*.ts?(x)',
      ],
      extends: ['yialo/preset-web-ts-check-jest'],
    },
    {
      files: [
        '.eslintrc.js',
        './config/**/*.js',
        './scripts/**/*.js',
      ],
      extends: ['yialo/preset-node'],
    },
    {
      files: ['./src/**/*.ts?(x)'],
      extends: ['yialo/preset-web-ts-check'],
    },
  ],
  rules: {
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.{?(s)css,jp?(e)g,png,svg}'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js',
      },
    },
  },
};
```
