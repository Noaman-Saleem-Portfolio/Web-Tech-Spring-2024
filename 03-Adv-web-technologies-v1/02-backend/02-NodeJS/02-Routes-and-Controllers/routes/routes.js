import express from "express";
import { getAllProducts } from "../controllers/product-controller.js";

const router = express.Router();

// show all products
router.route("/products").get(getAllProducts);

export default router;
