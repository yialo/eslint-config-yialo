'use strict';

const { loggerUtil } = require('./_utils');

console.log(loggerUtil.colorize.yellow.bgBlue('=== START ==='));

// FIXME: enable all after debug
void require('./core');
void require('./babel');
// void require('./import');
// void require('./jest');
// void require('./jsx-a11y');
// void require('./node');
// void require('./promise');
// void require('./react-hooks');
// void require('./react');
void require('./typescript');

console.log(loggerUtil.colorize.yellow.bgBlue('=== END ==='));
