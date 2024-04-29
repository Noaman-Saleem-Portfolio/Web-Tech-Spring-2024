// const express = require("express");
// const morgan = require("morgan");

import express from "express";
import morgan from "morgan";

const app = express();

//Middlewares

// app.use((req, res, next) => {
//   console.log("Request Receieved!");
//   next();
// });

app.use(morgan("dev"));

// Routes

// Home Route
app.get("/", (req, res) => {
  res.send("Hello dost mai home route hun!");
});

// Products Route
app.get("/products", (req, res) => {
  res.send("Mai Tumhy Products in list send kru ga!");
});

// Song Route
app.get("/song", (req, res) => {
  res.send("<h1>Dil dil Pakistan</h1>");
});

// Not-found Route
app.get("*", (req, res) => {
  res.send("<h1>Page Not Found</h1>");
});

// Not-found Route
app.post("/products", (req, res) => {
  res.send("Mai DB mai new product add kru ga");
});

// creating web server
app.listen(8000, () => {
  console.log(`Server listening at port 8000`);
});
