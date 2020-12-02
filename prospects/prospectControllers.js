const db = require('../dbConfig.js');

module.exports = {
    add,
    getAll
}

async function add(user){
    await db('users')
    .insert(user, 'id')
    return db('users');
}

function getAll(){
    return db('users');
}