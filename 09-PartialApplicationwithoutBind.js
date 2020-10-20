'use strict';

module.exports = (namespace) => {
    return (...args) => console.log.apply(console, [namespace].concat(args));
};
