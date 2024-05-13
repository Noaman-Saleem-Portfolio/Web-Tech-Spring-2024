import express from "express";

import { upload } from "../middlewares/multer.js";
import { registerUser } from "../controllers/user-controller.js";

const router = express.Router();

// route - /api/v1/user/new
router.route("/user/new").post(registerUser);

export default router;
