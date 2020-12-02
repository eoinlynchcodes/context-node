const express = require("express");
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());



server.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
});

module.exports = server;