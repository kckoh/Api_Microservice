var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const dns = require('dns');

var url;
var obj;

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(httparse("https://www.naver.com"))
});

app.get("/api/shorturl/1", (req,res) => {
    res.send()
})

app.post("/api/shorturl/new", (req,res) => {
    url = httparse(req.body.url);
    console.log(url)

dns.lookup(url, (err, address) =>{
        if(err){
            obj = {error: "invalid"}
            res.redirect("/api/shorturl/new")
        }
        else{
            obj = {"original_url": url, "short_url":545}
                res.redirect("/api/shorturl/new")
        }
});
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