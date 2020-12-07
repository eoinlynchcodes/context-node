const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const authControllers = require('./auth-controllers');

router.get('/', (req, res) => {
    res.json({message: 'auth-route'});
})

router.get('/users', (req, res) => {
    authControllers.findAllUsers()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(400).json(error);
    })
});

router.post('/register', (req, res) => {
    let { firstName, lastName, username, password, emailAddress, companyName } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 14);
    authControllers.newUser({
        firstName,
        lastName,
        username,
        password: hashedPassword,
        emailAddress,
        companyName
    })
    .then(newUser => {
        res.status(201).json(newUser);
    })
    .catch(error => {
        res.status(500).json('This is an error ' + error);
    });
});

router.post('/login', (req, res) => {
    let { 
        emailAddress, 
        password
    } = req.body;
    authControllers.findBy({ emailAddress })
    .first()
    .then( user => {
        if( user && bcryptjs.compareSync(password, user.password)){
            res.status(200).json({
                message: `Welcome ${user.username}. Eoin, add a token! `,
                userID: user.id
            })
        } else {
            res.status(401).json({ message: 'Invalid Credentials'});
        };
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

module.exports = router;
