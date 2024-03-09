import express from "express";
import {
  getAllPackages,
  newPackage,
} from "../controllers/package-controller.js";

const router = express.Router();

//route - /api/v1/packages/new
router.route("/new").get(newPackage);

//route - /api/v1/packages/all
router.route("/all").get(getAllPackages);

export default router;
