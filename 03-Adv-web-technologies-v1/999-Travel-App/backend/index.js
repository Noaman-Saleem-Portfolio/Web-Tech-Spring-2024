import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

import { connectDB } from "./database/connectDB.js";

//Importing routes
import packagesRoutes from "./routes/package-routes.js";

const app = express();

//Configuring environment variables
config({
  path: "./.env",
});

const port = process.env.PORT || 4000;
const mongoURI = process.env.MONGO_URI || "";

//Connecting to MongoDB
connectDB(mongoURI);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API Working with /api/v1");
});

//Using routes
app.use("/api/v1/packages", packagesRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
