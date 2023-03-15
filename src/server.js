// connect to mongo
import "./db";
import "./models/item.js";

// use express server

//const express = require("express");
// new version
import express from "express";
// import Mogran
import morgan from "morgan";

import globalRouter from "./globalRouter";

// import Bootstrap
// import bootstrap from 'bootstrap';

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

// use pug as a view engine.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);

const handleListening = () => console.log(
    `Server listening on port http://localhost:${PORT}`
);

// high number ports are available. The, run the callback called handleListening
app.listen(PORT, handleListening);