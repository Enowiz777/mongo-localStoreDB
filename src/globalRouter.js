import express from "express";
import { handleHome, handleAdd, getEdit, postEdit } from "./globalController";
const globalRouter = express.Router();

// Route to home, edit, and delete.
globalRouter.route("/").get(handleHome).post(handleAdd);
globalRouter.route('/:Id/edit').get(getEdit).post(postEdit);

export default globalRouter;