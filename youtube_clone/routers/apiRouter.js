import express from "express";
import routes from "../routes";
import {
    postregisterView,
    postADDComment,
} from "../controllers/videoController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postregisterView);
apiRouter.post(routes.addComment,postADDComment);

export default apiRouter;
// M Data
// V how does the data look
// C function that looks for the data
