import express from "express";
import { handleHome, handleAdd, handleEdit } from "./globalController";
const globalRouter = express.Router();

globalRouter.route("/").get(handleHome).post(handleAdd);
globalRouter.route('/:Id/edit').get(handleEdit);

export default globalRouter;