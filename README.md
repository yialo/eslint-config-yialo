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

* [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
* [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [eslint](https://www.npmjs.com/package/eslint)
* [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)
* [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel)
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
* [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
* [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
* [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node)
* [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
* [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
* [typescript](https://www.npmjs.com/package/typescript)

You may install them quickly with this command:

```shell
npm install -DE @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-import-resolver-webpack eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks typescript
```

```shell
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-import-resolver-webpack eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks typescript -DE
```

Command for quick removal of them:

```shell
npm uninstall -D @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-import-resolver-webpack eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks typescript
```

```shell
yarn remove @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-import-resolver-webpack eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks typescript -D
```

Notice that `typescript` may be regular (non-dev) dependency in your project. In this case you should add it with -SE flag instead of -DE, and remove with -S instead of -D.

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

### Unassigned import in webpack

There is rule `import/no-unassigned-import` which is probably need to be defined in end-user config in case of usage with [webpack](https://webpack.js.org/):

```js
// .eslintrc.js
'import/no-unassigned-import': [
  'error',
  {
    allow: ['**/*.{?(s)css,jp?(e)g,png,svg}'],
  },
],
```

Default:

```js
// .eslintrc.js
rules: {
  'import/no-unassigned-import': 'error',
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
