import express from "express";

import { upload } from "../middlewares/multer.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user-controller.js";
import { verifyJWT } from "../middlewares/auth-middleware.js";

const router = express.Router();

// route - /api/v1/user/new
router.route("/user/new").post(registerUser);

// route - /api/v1/user/login
router.route("/user/login").post(loginUser);

// secure route
// route - /api/v1/user/logout
router.route("/user/logout").post(verifyJWT, logoutUser);

export default router;
