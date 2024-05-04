import express from "express";
import morgan from "morgan";
import methodOverride from "method-override";
import connectDB from "./database/database.js";

const app = express();

// setting view engine
app.set("view engine", "ejs");
app.set("views", "views");

// setting folder for static assets
app.use("/public", express.static("public"));
// app.use("/uploads", express.static("uploads"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// importing routes
import bookRoutes from "./routes/book-routes.js";

//connecting to MongoDB
connectDB();

//Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

// using routes
app.use(bookRoutes);

// creating web server
app.listen(8000, () => {
  console.log(`Server listening at port 8000`);
});
