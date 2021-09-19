'use strict';

module.exports = {
  extends: [
    '../mixins/_abstract.js',
    '../mixins/web-bundle.js',
    '../mixins/react.js',
    '../mixins/ts-nocheck.js',
    '../mixins/ts-checkonly.js',
    '../mixins/jest-nocheck.js',
    '../mixins/jest-checkonly.js',
  ],
};
