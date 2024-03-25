import express from "express";

import myRoutes from "./routes/routes.js";

const app = express();
const PORT = 4000;

// app.use(() => {
//   console.log(`Request receieved!`);
// });

//Home route
app.get("/", (req, res) => {
  res.send("Response from url at /");
});

//using routes
app.use("/api/v1", myRoutes);

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
