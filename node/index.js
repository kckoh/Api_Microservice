var express = require('express');
var app = express();
require('dotenv').config()

app.get('/', function (req, res) {
   res.send("Hello World")

});

app.get('/json', function (req, res) {
    var hello = "hello json"
    var message = {"message": hello}
    if(process.env.MESSAGE_STYLE == "uppercase"){
        message.message = message.message.toUpperCase()
        console.log(hello)
        res.json(message)
    }
    else{
        res.json({"message": "Hello World"})
    }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
