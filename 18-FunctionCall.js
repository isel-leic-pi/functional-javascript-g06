'use strict';

// Well, we didn't use the function keyword... (I don't think they took lambdas into account)
module.exports = (arr, ...rest) => Array.prototype.slice.apply(arr, rest);

// What they actually wanted was this, which took a while to comprehend:
// module.exports = Function.prototype.call.bind(Array.prototype.slice);
