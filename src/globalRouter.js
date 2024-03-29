import express from "express";
import { 
    handleHome, 
    handleAdd, 
    getEdit, 
    postEdit, 
    postDelete, 
    sortRoute,
    searchRoute
} from "./globalController";
const globalRouter = express.Router();

// Route to home, edit, and delete.
globalRouter.route("/").get(handleHome).post(handleAdd);
globalRouter.route('/search').get(searchRoute);
globalRouter.route('/:Id/edit').get(getEdit).post(postEdit);
globalRouter.route('/:Id/delete').post(postDelete);
globalRouter.route('/:Id').get(sortRoute);



export default globalRouter;