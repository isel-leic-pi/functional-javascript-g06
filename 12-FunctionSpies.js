'use strict';

function Spy(target, method) {
    const ogFunc = target[method];
    const spy = { count:0 };
    target[method] = (...args) => {
        ++spy.count;
        ogFunc.apply(target, args);
    };
    return spy;
}
    
module.exports = Spy;
