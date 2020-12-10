const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const meetingRoute = require('../meetings/meeting-router.js');
const authRoute = require('../authentication/auth-route.js');

const prospectControllers = require('../prospects/prospectControllers.js');
const router = require('express').Router();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/meetings', meetingRoute);
server.use('/auth/users', authRoute );


server.get('/api/prospects', (req, res) => {
    prospectControllers.getAll()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(400).json(error);
    });
})

server.post('/api/prospects', (req, res) => {
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
server.get("/", (req, res) => {
    res.send("<h1>Hello Eoin. It is deployed. Well done.</h1>")
});

module.exports = server;