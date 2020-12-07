const db = require('../dbConfig.js');

module.exports = {
    newUser,
    findAllUsers,
    findBy
}

async function newUser(user){
    await db('users')
    .insert(user, 'id')
    return db('users');
}

function findAllUsers(){
    return db('users');
}

function findBy(filter){
    return db('users').where(filter);
}