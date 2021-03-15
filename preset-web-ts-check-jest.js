'use strict';

module.exports = {
  extends: [
    './mixins/base.js',
    './mixins/web.js',
    './mixins/ts-nocheck.js',
    './mixins/ts-checkonly.js',
    './mixins/jest-base.js',
    './mixins/jest-tscheck.js',
  ],
};
