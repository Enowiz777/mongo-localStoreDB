import express from "express";
import { handleHome, handleAdd } from "./globalController";
const globalRouter = express.Router();

globalRouter.route("/").get(handleHome).post(handleAdd);

export default globalRouter;