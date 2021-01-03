import express from "express";
import routes from "../routes";
import { videos, getupload , postupload,videoDetail, editVideo, deleteVideo } from "../controllers/videoController";
import { editProfile } from "../controllers/userController";
const videoRouter = express.Router();


videoRouter.get(routes.upload,getupload);
videoRouter.post(routes.upload,postupload);
videoRouter.get(routes.videoDetail(),videoDetail);
videoRouter.get(routes.editVideo,editProfile);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;
