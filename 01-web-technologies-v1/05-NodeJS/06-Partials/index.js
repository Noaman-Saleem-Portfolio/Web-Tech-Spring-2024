import express from "express";
import morgan from "morgan";
import connectDB from "./database/database.js";

const app = express();

// setting view engine
app.set("view engine", "ejs");
app.set("views", "views");

// setting folder for static assets
app.use(express.static("public"));

// importing routes
import bookRoutes from "./routes/book-routes.js";

//connecting to MongoDB
connectDB();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

// using routes
app.use(bookRoutes);

// creating web server
app.listen(8000, () => {
  console.log(`Server listening at port 8000`);
});
