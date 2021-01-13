import express from "express";
import routes from "../routes";
import {
    postregisterView
} from "../controllers/videoController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postregisterView);


export default apiRouter;
// M Data
// V how does the data look
// C function that looks for the data
