import "dotenv/config";
import express from "express";
import morgan from "morgan";
import connectDB from "./database/database.js";
import bookRoutes from "./routes/bookRoutes.js";

// console.log(process.env);

const app = express();

connectDB(process.env.MONGO_URI);

// setting view engine
app.set("view engine", "ejs");
app.set("views", "views");

// middlewares
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", bookRoutes);

app.get("/", (req, res) => {
  let name = "Ali";
  let num = Math.floor(Math.random() * 10) + 1;
  let friends = ["Ali", "Nomi", "Hina"];
  res.render("index", { name, num, friends });
});

app.get("*", (req, res) => {
  res.send("<h1>404 Not Found</h1>");
});

app.listen(process.env.PORT, () => {
  console.log("Server listening");
});











// MONGO_URI=mongodb+srv://noaman2266:nomibhai@cluster0.dtyqu.mongodb.net/testing123?retryWrites=true&w=majority&appName=Cluster0

// PORT=8000