var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const dns = require('dns');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});

var shortUrlSchema = new mongoose.Schema({
  site: String,
  url: Number
});

var shortUrl = mongoose.model('shortUrl', shortUrlSchema);

var url;
var obj;

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.post("/api/shorturl/new", (req,res) => {
    url = httparse(req.body.url);
    console.log(url)

dns.lookup(url, (err, address) =>{
        if(err){
            obj = {error: "invalid"}
            res.redirect("/api/shorturl/new")
        }
        else{
            var shorturls = new shortUrl({site: url, number  });
            obj = {"original_url": url, "short_url":545}
                res.redirect("/api/shorturl/new")
        }});
})

app.get("/api/shorturl/new", (req,res) => {
    res.json(obj)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function httparse(strings){
    if(strings.includes("http://")){
       return strings.slice(7)
    }

    else if(strings.includes("https://")){
        return strings.slice(8)
    }

    else{
        return strings;
    }
}