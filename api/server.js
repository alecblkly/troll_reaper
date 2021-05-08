const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Router for Jokes will be imported below

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
    res.send(`<p>Reaper Troll - Twitch</p>`);
});

module.exports = server;