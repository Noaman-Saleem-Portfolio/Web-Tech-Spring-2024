import express from "express";

import { upload } from "../middlewares/multer.js";
import { loginUser, registerUser } from "../controllers/user-controller.js";

const router = express.Router();

// route - /api/v1/user/new
router.route("/user/new").post(registerUser);

// route - /api/v1/user/login
router.route("/user/login").post(loginUser);

export default router;
