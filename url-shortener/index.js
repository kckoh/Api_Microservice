var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var dns = require("dns")

var url;


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/api/shorturl/1", (req,res) => {
    res.send()
} )

app.post("/", (req,res) => {
    var url = req.body.url
    if(){
        res.redirect(url)
    }
    else{
        console.log("error")
    }





} )

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});