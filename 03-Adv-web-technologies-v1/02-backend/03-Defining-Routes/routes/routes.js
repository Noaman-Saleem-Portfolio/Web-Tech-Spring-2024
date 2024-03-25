import express from "express";
const router = express.Router();

router.route("/products").get((req, res) => {
  res.json({
    message: "/products route",
    data: ["Product 1", "Product 2", "Product 3"],
  });
});

router.route("/friends").post((req, res) => {
  res.json({
    message: "/friends route",
    data: ["Noaman", "Faisal", "Umair"],
  });
});

export default router;
