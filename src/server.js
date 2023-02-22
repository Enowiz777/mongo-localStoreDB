
// use express server

//const express = require("express");
// new version
import express from "express";
// import Mogran
import morgan from "morgan";

import globalRouter from "./globalRouter";

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);

const handleListening = () => console.log(
    `Server listening on port http://localhost:${PORT}`
);

// high number ports are available. The, run the callback called handleListening
app.listen(PORT, handleListening);