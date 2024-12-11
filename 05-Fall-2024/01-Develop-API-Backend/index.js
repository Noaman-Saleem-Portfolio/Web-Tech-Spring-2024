import "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectDB from "./database/database.js";
import bookRoutes from "./routes/bookRoutes.js";

// console.log(process.env);

const app = express();

connectDB(process.env.MONGO_URI);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", bookRoutes);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.get("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("Server listening");
});
