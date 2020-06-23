# Yialo's ESLint configuration

## Installation

```shell
npm install -DE eslint-config-yialo
```

## Usage

### End-user config example

This package contains several rulesets for [ESLint](https://github.com/eslint/eslint):

* `preset-node.js`
* `preset-webpack.js`
* `mixin-jest.js`
* `mixin-typescript.js`

They may be used in high-level and `overrides` blocks:

```yaml
extends:
  - yialo/preset-webpack.js
globals:
  process: readonly
ignorePatterns:
  - '*.html'
  - /dist/
overrides:
  - extends:
      - yialo/mixin-jest.js
    files:
      - ./**/*.{spec,test}.js?(x)
  - extends:
      - yialo/preset-node.js
    files:
      - ./config/**/*.js
      - ./scripts/**/*.js
  - extends:
      - yialo/mixin-typescript.js
    files:
      - ./src/**/*.ts?(x)
rules:
  import/no-unassigned-import:
    - error
    - allow:
      - '**/*.{?(s)css,jp?(e)g,png,svg}'
settings:
  import/resolver:
    webpack:
      config: ./config/webpack.config.js
```

Notice that `mixin-jest.js` and `mixin-typescript.js` are not independent configs and should be used as `extends` of `overrides` blocks only.

### Specific rules and settings

There are several rules which are probably need to define in end-user config:

* in `rules` section:
  * `import/no-unassigned-import`

    Default:

    ```yaml
    # .eslintrc.yaml
    import/no-unassigned-import: error
    ```

    Example of usage with [webpack](https://webpack.js.org/):

    ```yaml
    # .eslintrc.yaml
    import/no-unassigned-import:
      - error
      - allow:
        - '**/*.{?(s)css,jp?(e)g,png,svg}'
    ```

* in `settings` section:
  * `import/resolver`

    webpack default:

    ```yaml
    # .eslintrc.yaml
    import/resolver: webpack
    ```

    Example of custom usage with [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack):

    ```yaml
    # .eslintrc.yaml
    import/resolver:
      webpack:
        config: ./config/webpack.config.js
        env:
          target: development
    ```

    Node.js default:

    ```yaml
    # .eslintrc.yaml
    import/resolver: node
    ```

### Peer dependencies

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

You may install them quickly with this command:

```shell
npm install -DE @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-eslint eslint eslint-import-resolver-webpack eslint-plugin-babel eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks
```
