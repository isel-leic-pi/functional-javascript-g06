'use strict';

module.exports = (arr, fn) => { 
    return arr.reduce((newArr, element) => {
        newArr.push(fn(element));
        return newArr;
    }, []);
};
