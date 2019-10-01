var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const dns = require('dns');


var db = require("./database").db
var mongoose = require("./database").mongoose

var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);


var shortUrlSchema = new mongoose.Schema({
  site: String
});

shortUrlSchema.plugin(autoIncrement.plugin, 'shortUrl');

var shortUrl = mongoose.model('shortUrl', shortUrlSchema);

var url;
var obj;
var urlhttp;
var id;

app.get('/', function (req, res) {
  res.send('Hello World!');
});
var sites = "/api/shorturl/new";

app.post("/api/shorturl/new", (req,res) => {
    url = httparse(req.body.url);
    urlhttp = req.body.url
    console.log(url)

dns.lookup(url, (err, address) => {
        if(err){
            obj = {error: "invalid"}
            res.redirect("/api/shorturl/new")
        }
        else{
            //gotta fix this too to query style
            shortUrl.findOne({ 'site': urlhttp}, function (err, short) {
                if (err) {
                    console.log("error")
                    var shorturls = new shortUrl({site: url});
                    shorturls.save(function(err) {if (err) return handleError(err);} )
                }

                    obj = {"original_url": req.body.url, "short_url": short._id}
                    res.redirect("/api/shorturl/new")
                    console.log('the site name is: %s and id is %s.', short.site, short._id);
                });


        }});
})

app.get("/api/shorturl/new", (req,res) => {
    res.json(obj)
})

// ---problem here dont know why but i will figure it out
app.get("/api/shorturl/:id", (req,res) => {
    var querying  = shortUrl.where({ _id: req.params.id});
    console.log(req.params.id)
    //this is running last that is why the change is one behind how do i fix this lol
    querying.findOne(function (err, short) {
        if (err) {
        return handleError(err);
        }
        else {
                if (short) {
            // doc may be null if no document matched
            console.log(1)
            sites = short.site
        }
        else{
            console.log(2)
            sites = "/api/shorturl/new"
            }
        }

    });
    console.log(sites)
    res.redirect(sites)

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

