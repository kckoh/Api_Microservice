var express = require('express');
var app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
    var obj = {message: "Hello World!"}
    res.send("hello")

});

module.exports = app;
