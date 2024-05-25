import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";

//Configuring environment variables
config({
  path: "./.env",
});

import connectDB from "./database/database.js";

// importing routes
import bookRoutes from "./routes/book-routes.js";
import userRoutes from "./routes/user-routes.js";
import paymentRoutes from "./routes/payment-routes.js";

const app = express();

// setting cors()
// cor issue soved withcredential:true from react
// https://stackoverflow.com/questions/19743396/cors-cannot-use-wildcard-in-access-control-allow-origin-when-credentials-flag-i
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const mongoURI = process.env.MONGO_URI || "";

//connecting to MongoDB
connectDB(mongoURI);

// setting folder for static assets
app.use("/public", express.static("public"));

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// using routes
app.use("/api/v1", bookRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", paymentRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello dost mai home route hun!");
});

// errorMiddleware
app.use(errorMiddleware);

// creating web server
app.listen(8000, () => {
  console.log(`Server listening at port 8000`);
});
