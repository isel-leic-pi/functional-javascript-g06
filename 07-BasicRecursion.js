'use strict';

function reduce(arr, fn, initial, i = 0) {
    if(i == arr.length) return initial;
    initial = fn(initial, arr[i], i, arr);
    return reduce(arr, fn, initial, i + 1);
}
    
module.exports = reduce;
