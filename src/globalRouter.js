import express from "express";
import { handleHome, handleTest } from "./globalController";
const globalRouter = express.Router();



globalRouter.get("/", handleHome);
globalRouter.get("/test", handleTest);

export default globalRouter;