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

// Get all meeting reports
router.get('/meetingreports', (req, res) => {
    controllers.getMeetingReports()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

// This function gets the future meetings of the logged in user.
router.get('/:id', ( req, res) => {
    const { userID } = req.params;
    controllers.getMeetingById(userID)
    .then((response) => {
        res.send(response);
    })
    .catch((error) => {
        res.send(error);
    })
});

router.post('/', (req, res) => {
    const meeting = req.body;
    controllers.scheduleNewMeeting(meeting)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.post('/meetingreport', (req, res) => {
    const savedMeeting = req.body;
    controllers.saveMeetingResults(savedMeeting)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    controllers.deleteFutureMeeting(id)
    .then(response => {
        res.status.json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    });
});


module.exports = router;
