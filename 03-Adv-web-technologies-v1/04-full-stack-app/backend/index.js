import express from "express";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./database/database.js";

// importing routes
import bookRoutes from "./routes/book-routes.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();

// setting cors()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       return callback(null, true);
//     },
//     optionsSuccessStatus: 200,
//     credentials: true,
//   })
// );
// const corsOptions = {
//   credentials: true,
//   origin: ["http://localhost:3000"],
// };

// app.use(cors(corsOptions));
// const corsOptions = {
//   origin: "http://localhost:5173/",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.use(cors());

//connecting to MongoDB
connectDB();

// setting folder for static assets
app.use("/public", express.static("public"));

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

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
