
// use express server

//const express = require("express");
// new version
import express from "express";

const PORT = 4000;
const app = express();

const handleListening = () => console.log(
    `Server listening on port http://localhost:${PORT}`
);

// high number ports are available. The, run the callback called handleListening
app.listen(PORT, handleListening);