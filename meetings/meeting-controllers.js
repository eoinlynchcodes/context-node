const db = require('../dbConfig.js');

module.exports = {
    getMeetings,
    getMeetingById,
    scheduleNewMeeting,
    saveMeetingResults,
    getMeetingReports,
}


// Get all meetings and their details
function getMeetings(){
    return db('meetings').select('*');
}

// Get all meeting reports
function getMeetingReports(){
    return db('meetingreports').select('*');
}

// Find a specific meeting by its ID.
function getMeetingById(id){
    return db('meetings')
    .where({ id })
    .first();
}

// Schedule a new meeting
async function scheduleNewMeeting(meeting){
    await db('meetings')
    .insert(meeting, 'id');
    return db('meetings');
}

// Schedule a new meeting
async function saveMeetingResults(savedMeeting){
    await db('meetingreports')
    .insert(savedMeeting, 'id');
    return db('meetingreports');
}

