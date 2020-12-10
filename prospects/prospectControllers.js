const db = require('../dbConfig.js');

module.exports = {
    add,
    getAll
}

async function add(prospect){
    await db('prospects')
    .insert(prospect, 'id')
    return db('prospects');
}

function getAll(){
    return db('prospects');
}

