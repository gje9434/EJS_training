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
    res.render("list", { heading: day.getDay(),  items: mainItems });
})

app.get("/work", (req, res) => {
    res.render("list", { heading: "Work",  items: workItems });
})

app.get("/about", (req, res) => {
    res.render("about");
})

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    if(req.body.list === "Work") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        mainItems.push(newItem);
        res.redirect("/");
    }
})