var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


var app = express();
var port = 3000;

app.get("/", function (req, res) {

    connection.query("SELECT * FROM burgers;", function (err, data) {
        if (err) throw err;

        res.render("index", {burgers: data});
    });
});


// Post route -> back to home
app.post("/", function (req, res, next) {

    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function (err, result) {
        if (err) throw err;

       

        res.redirect("/");
    });

 });

app.listen(port);