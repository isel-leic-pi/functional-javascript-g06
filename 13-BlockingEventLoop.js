'use strict';
// All of our initial solutions were wrong, and we all managed to make it crash hard enough to pass,
// how were we supposed to know that the expected solution was just to add a timeout every x operations? 
// Seems pretty lame to me

function repeat(operation, num) {
    if (num <= 0) return;
    operation(); 
    if (num % 10 === 0)
        setTimeout(() => repeat(operation, --num));
    else
        repeat(operation, --num);
}

module.exports = repeat;
