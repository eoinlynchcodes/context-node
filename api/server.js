const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const prospectControllers = require('../prospects/prospectControllers.js');
const router = require('express').Router();

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
    prospectControllers.findAll()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        res.status(400).json(error);
    });
})

server.post('/', (req, res) => {
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
    res.send("<h1>Hello</h1>")
});

module.exports = server;