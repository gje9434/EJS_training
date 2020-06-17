const express = require("express");
const app = express();
const day = require("./day");

var mainItems = [];
var workItems = [];

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static("public"));

app.listen(3000, () => {
    console.log("server started");
})

app.get("/", (req, res) => {
    res.render("list", { title: day.getDay(),  items: mainItems });
})

app.get("/about", (req, res) => {
    res.render("about", { title: "This is the about page" });
})

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    mainItems.push(newItem);
    res.redirect("/");
})