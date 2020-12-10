const router = require('express').Router();
const controllers = require('./meeting-controllers');

router.get('/', (req, res) => {
    controllers.getMeetings()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
});

// This will need the meeting id to be added to req.params on the frontend.
router.get('/:id', ( req, res) => {
    const { id } = req.params;
    controllers.getMeetingById(id)
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        res.send(error);
    })
});

router.post('/newmeeting', (req, res) => {
    const meeting = req.body;
    controllers.scheduleNewMeeting(meeting)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.get('/savemeeting', (req, res) => {
    controllers.getMeetingResults()
    .then(response => {
        res.send(response);
    })
    .catch(error => {
        res.send(error);
    });
});

router.post('/savemeeting', (req, res) => {
    const savedMeeting = req.body;
    controllers.saveMeetingResults(savedMeeting)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});


module.exports = router;
