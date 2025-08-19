
import express from "express";
import { getUserProfile, login, register } from "../controllers/user.controller";
import { protect } from "../middlewares/auth.middleware";

const userRouter=express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.get('/profile',protect,getUserProfile);

export default userRouter;
