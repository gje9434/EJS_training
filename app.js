const express = require("express");
const app = express();

app.set("view engine", "ejs");

const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

app.listen(3000, () => {
    console.log("server started");
})

app.get("/", (req, res) => {
    let currentDay = new Date();
    res.render("list", {dayOfTheWeek: weekdays[currentDay.getDay()-1]});
})