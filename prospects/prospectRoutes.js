const router = require('express').Router();

const prospectControllers = require('./prospectControllers/js');

router.get('/', (req, res) => {
    prospectControllers.findAll()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(400).json(error);
    });
})

router.post('/', (req, res) => {
    let { name, email } = req.body;
    prospectControllers.add({
        name,
        email
    })
    .then(newUser => {
        res.status(201).json(newUser);
    })
    .catch(error => {
        res.status(500).json('There is an error' + error);
    });
});

module.exports = router;
