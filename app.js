const express = require("express");
const app = express();

var items = [];

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("server started");
})

app.get("/", (req, res) => {
    let options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    let currentDate = new Date().toLocaleString("en-GB", options);
    res.render("list", { dayOfTheWeek: currentDate,  items: items});
})

app.post("/", (req, res) => {
    let newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
})