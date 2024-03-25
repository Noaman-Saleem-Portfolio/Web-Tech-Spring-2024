import express from "express";

const app = express();
const PORT = 4000;

// app.use(() => {
//   console.log(`Request receieved!`);
// });

//Home route
app.get("/", (req, res) => {
  res.send("Response from url at /");
});

//Happy Route
app.get("/happy", (req, res) => {
  res.send("<h1>I am Happy :)</h1>");
});

//Sad Route
app.get("/sad", (req, res) => {
  res.send("<h1>I am Sad :(</h1>");
});

//default route
app.get("*", (req, res) => {
  res.send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
