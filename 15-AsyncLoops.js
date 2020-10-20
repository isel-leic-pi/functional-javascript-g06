'use strict';

function loadUsers(userIds, load, done) {
    const users = [];
    if(userIds.length == 0) return done(users);
    let count = 0;
    userIds.forEach((id, idx) => load((id, usr) => {
        users[idx] = usr; 
        if(++count == userIds.length) 
            return done(users);
    }));
}
    
module.exports = loadUsers;
