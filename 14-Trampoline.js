'use strict';

function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return () => repeat(operation, num - 1);
}

function trampoline(fn) {
    for(let i = fn(); typeof(i) == 'function'; i = i());
}

module.exports = (operation, num) => {
    trampoline(() => repeat(operation, num));
};
