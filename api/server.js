const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const meetingRoute = require('../meetings/meeting-router.js');
const authRoute = require('../authentication/auth-route.js');

const router = require('express').Router();

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/meetings', meetingRoute);
server.use('/auth/users', authRoute );

server.get("/", (req, res) => {
    res.send("<h1>Hello Eoin. It is deployed. Well done.</h1>")
});

module.exports = server;