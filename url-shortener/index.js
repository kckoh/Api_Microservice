var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const dns = require('dns');

//db option
var db = require("./database").db
var mongoose = require("./database").mongoose

//auto increment id
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);

var shortUrlSchema = new mongoose.Schema({
    site: String
});

//auto increment
shortUrlSchema.plugin(autoIncrement.plugin, 'shortUrl');

//global variables
var shortUrl = mongoose.model('shortUrl', shortUrlSchema);
var urlhttp;
var url;
var obj;
var id;
var sites

//home page
app.get('/', function(req, res) {
    res.send("hello")
});

//post to this url
app.post("/api/shorturl/new", (req, res) => {
    url = httparse(req.body.url);
    urlhttp = req.body.url;
    dns.lookup(url, (err, address) => {
        if (err) {
            obj = {
                error: "invalid"
            }
            res.redirect("/api/shorturl/new")
        } else {

            // query the
            var queries = shortUrl.findOne({
                'site': urlhttp
            });
            var promise = queries.exec();
            promise.then(function(doc) {
                if (doc) {
                    obj = {
                        "original_url": req.body.url,
                        "short_url": doc._id
                    }
                    res.redirect("/api/shorturl/new")
                } else {
                    a();
                }
            });
        }
    });
})

// default to find short url
app.get("/api/shorturl/new", (req, res) => {
    res.json(obj)
})

// query the id if exists direct to the site else redirect to new
app.get("/api/shorturl/:id", (req, res) => {
    sites = "/api/shorturl/new";
    var query = shortUrl.findOne({
        _id: req.params.id
    });
    var promise = query.exec();
    promise.then(function(doc) {
        if (doc) {
            res.redirect(doc.site)
        } else {
            obj = {
                error: "invalid"
            }
            res.redirect("/api/shorturl/new")
        }
    });


})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

function httparse(strings) {
    if (strings.includes("http://")) {
        return strings.slice(7)
    } else if (strings.includes("https://")) {
        return strings.slice(8)
    } else {
        return strings;
    }
}

function a() {
    var shorturls = new shortUrl({
        site: urlhttp
    });
    shorturls.save(function(err) {
        if (err) return handleError(err);
    })

    var queries = shortUrl.findOne({
        'site': urlhttp
    });
    var promise = queries.exec();
    promise.then(function(doc) {
        if (doc) {
            obj = {
                "original_url": req.body.url,
                "short_url": doc._id
            }
            res.redirect("/api/shorturl/new")
        }
    });
}