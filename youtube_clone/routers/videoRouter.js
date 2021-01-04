import express from "express";
import routes from "../routes";
import { uploadVideo } from "../middlewares";
import {
  getupload,
  postupload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getupload);
videoRouter.post(routes.upload, uploadVideo, postupload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
// Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
