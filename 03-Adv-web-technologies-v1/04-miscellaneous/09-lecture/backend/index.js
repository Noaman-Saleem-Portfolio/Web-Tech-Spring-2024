import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./database/database.js";

// importing routes
import bookRoutes from "./routes/book-routes.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

//connecting to MongoDB
connectDB();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// using routes
app.use("/api/v1", bookRoutes);

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
