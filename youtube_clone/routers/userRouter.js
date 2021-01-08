import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate,editProfile);
userRouter.get(routes.changePassword,onlyPrivate,changePassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
// M Data
// V how does the data look
// C function that looks for the data
