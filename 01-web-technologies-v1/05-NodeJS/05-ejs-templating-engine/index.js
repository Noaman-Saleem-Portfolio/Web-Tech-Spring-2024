const express = require("express")
const app = express()
const path = require("path")

const port = 3000


//setting view engine
app.set("view engine", "ejs")
// app.set("views",path.join(__dirname,"views"))

//home page
app.get("/", (req, res) => {
    // res.send("Home page")
    // console.log(process.cwd());
    // console.log(__dirname);
    res.render("home.ejs")
})

//random
app.get("/random", (req, res) => {
    const number = Math.floor(Math.random() * 10) + 1
    // console.log(number);
    res.render("random", { number })
})

//courses
app.get("/courses", (req, res) => {
    let courses = ["OOP", "Web", "DS", "Database"];
    res.render("courses", { courses })
})

//all
app.get("*", (req, res) => {
    res.send("Wrong URL!")
    // res.redirect("/")
})

app.listen(port, () => {
    console.log(`Sever is listening at port ${port}`);
})