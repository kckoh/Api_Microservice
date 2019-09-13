var express = require('express');
var app = express();

app.get('/', function (req, res) {

    if(process.env.MESSAGE_STYLE == "uppercase"){
        res.send("its working")
    }
    else{
        res.json({"message": "Hello World"})
    }

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
