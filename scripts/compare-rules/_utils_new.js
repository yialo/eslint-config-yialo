'use strict';

module.exports.groupLog = (groupName, log) => {
  console.group(groupName);
  log();
  console.groupEnd();
};

module.exports.isObject = (value) =>
  value !== null && typeof value === 'object';
