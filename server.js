var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));