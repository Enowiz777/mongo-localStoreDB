
// use express server

//const express = require("express");
// new version
import express from "express";
// import Mogran
import morgan from "morgan";

import globalRouter from "./globalRouter";

// import Bootstrap
// import bootstrap from 'bootstrap';


const app = express();
const logger = morgan("dev");
app.use(logger);


// use pug as a view engine.
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);

export default app;