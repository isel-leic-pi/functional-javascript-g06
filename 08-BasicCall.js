'use strict';

module.exports = (...args) => args.filter((arg) => Object.prototype.hasOwnProperty.call(arg, 'quack')).length;
