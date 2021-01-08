import express from "express";
import routes from "../routes";
import { uploadVideo,onlyPrivate } from "../middlewares";
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
videoRouter.get(routes.upload, onlyPrivate,getupload);
videoRouter.post(routes.upload, onlyPrivate,uploadVideo, postupload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate,getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate,postEditVideo);
// Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate,deleteVideo);

export default videoRouter;
