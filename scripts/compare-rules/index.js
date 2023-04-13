'use strict';

const { loggerUtil } = require('./_utils');

console.log(loggerUtil.colorize.yellow.bgBlue('=== START ==='));

// FIXME: enable all after debug
// void require('./plugin_core');
// void require('./plugin_babel');
// void require('./plugin_import');
void require('./plugin_jest');
// void require('./plugin_jsx-a11y');
// void require('./plugin_node');
// void require('./plugin_promise');
// void require('./plugin_react-hooks');
// void require('./plugin_react');
// void require('./plugin_typescript');

console.log(loggerUtil.colorize.yellow.bgBlue('=== END ==='));
