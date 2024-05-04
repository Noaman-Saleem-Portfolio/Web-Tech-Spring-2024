import express from "express";
import { joke } from "./middleware/joke.js";

const app = express();

// app.use((req, res, next) => {
//   console.log("I am Middleware");
//   req.name = "Ali";
//   next();
// });

app.use(joke);
// app.use(joke(999));

app.get("/", (req, res) => {
  console.log(req.name);
  res.json({
    message: "Hello from Darvin!",
  });
});

app.listen(8000, () => {
  console.log(`Server listening at PORT 8000`);
});
