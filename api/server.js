const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const prospectRoutes = require('../prospects/prospectControllers.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/prospects', prospectRoutes);

server.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

module.exports = server;