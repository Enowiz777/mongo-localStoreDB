
// use express server

//const express = require("express");
// new version
import express from "express";

const PORT = 4000;
const app = express();


const handleHome = (req, res) => {
    return res.send("I still love you.");
  };
  const handleLogin = (req, res) => {
    return res.send("Login here.");
  };
// when somebody sends a GET request to a root, run a function or a callback function.
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(
    `Server listening on port http://localhost:${PORT}`
);

// high number ports are available. The, run the callback called handleListening
app.listen(PORT, handleListening);