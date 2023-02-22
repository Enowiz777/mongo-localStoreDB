import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleTest = (req, res) => res.send("Test");

globalRouter.get("/", handleHome);
globalRouter.get("/test", handleTest);

export default globalRouter;