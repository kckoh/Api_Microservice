var express = require('express');
var app = express();
require('dotenv').config()

//middleware practice
middleware = (req,res, next) => {
    console.log(req.method, req.path, req.ip)
    next()
}

app.get('/', middleware, function(req,res){
    res.send("HelloWorld")
});



//read json and using .env practice
app.get('/json', middleware, function (req, res) {
    var hello = "hello json"
    var message = {"message": hello}
    if(process.env.MESSAGE_STYLE == "uppercase"){
        message.message = message.message.toUpperCase()
        res.json(message)
    }
    else{
        res.json({"message": "Hello World"})
    }

});

// Chain Middleware to Create a Time Server
app.get('/now', function(req, res, next) {
req.time= new Date().toString()
next();
}, function(req, res) {
res.send({time:req.time});
})

//Get Route Parameter Input from the Client
app.get('/:word/echo', function(req,res){
    var obj = {echo:req.params.word}
    res.json(obj)
})

//Get Query Parameter Input from the Client
app.get('/query', function(req,res){

    if(req.query.first && req.query.last){
        var obj = {name: req.query.first+ ' ' + req.query.last}
        res.json(obj)
    }
    else{
        res.send("/quer?first=firstname&last=lastname")
    }
}).post('/query', function(req,res){

     if(req.query.first && req.query.last){
        var obj = {name: req.query.first+ ' ' + req.query.last}
        res.json(obj)
    }
    else{
        res.send("/quer?first=firstname&last=lastname")
    }

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
