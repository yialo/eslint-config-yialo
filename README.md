# Yialo's ESLint configuration

## Installation

```shell
npm install -DE eslint-config-yialo
```

## Usage

There are several rules which are probably need to define in end-user config:

* in `rules` section:
  * `import/no-unassigned-import`
* in `settings` section:
  * `import/extensions`
  * `import/ignore`
  * `import/parsers`
  * `import/resolver`

This package contains several rulesets for [ESLint](https://github.com/eslint/eslint):

* `node`
* `web`
* `web-partial-build`
* `web-partial-jest`
* `web-partial-typescript`

<!-- * `base`: for plain CSS and CSS Modules
* `scss`: for SCSS syntax only
* `full`: both of previous ones

If you've installed `stylelint-config-yialo` locally within your project, declare your stylelint config extension:

* For full ruleset use:

    ```json
    {
      "extends": "stylelint-config-yialo"
    }
    ```

* For base ruleset use:

    ```json
    {
      "extends": "stylelint-config-yialo/base"
    }
    ```

* For SCSS-only ruleset use:

    ```json
    {
      "extends": "stylelint-config-yialo/scss"
    }
    ``` -->
  
Notice that this package requires these ones as peer dependencies:

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
