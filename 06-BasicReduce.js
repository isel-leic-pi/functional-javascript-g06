'use strict';

function countWords(inputWords) {
    return inputWords.reduce((accumulator, item) => {
        accumulator[item] = (++accumulator[item]) || 1; // This is fun! NaN is false
        return accumulator;
    }, {});
}
module.exports = countWords;
