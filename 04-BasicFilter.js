'use strict';

module.exports = messages => messages
    .map(m => m.message)
    .filter(msg => msg.length < 50);
