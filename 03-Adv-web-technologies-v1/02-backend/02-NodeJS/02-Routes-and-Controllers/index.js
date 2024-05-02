// const express = require("express");
// const morgan = require("morgan");

import express from "express";
import morgan from "morgan";

// importing routes
import myRoutes from "./routes/routes.js";

const app = express();

//Middlewares

// app.use((req, res, next) => {
//   console.log("Request Receieved!");
//   next();
// });

// using routes
app.use("/api/v1", myRoutes);

app.use(morgan("dev"));

// Routes

// Home Route
app.get("/", (req, res) => {
  res.send("Hello dost mai home route hun!");
});

// Song Route
app.get("/song", (req, res) => {
  res.send("<h1>Dil dil Pakistan</h1>");
});

// Create Product Route
app.post("/products", (req, res) => {
  res.send("Mai DB mai new product create kru ga");
});

// Not-found Route
app.get("*", (req, res) => {
  res.send("<h1>Page Not Found</h1>");
});

// creating web server
app.listen(8000, () => {
  console.log(`Server listening at port 8000`);
});
