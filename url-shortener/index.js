var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
const dns = require('dns');

var db = require("./database").db
var mongoose = require("./database").mongoose

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

//original page
app.get('/', function(req, res) {
    res.render("index")
});


app.post("/api/shorturl/new", (req, res) => {
    url = httparse(req.body.url);
    urlhttp = req.body.url
    console.log(url)
    dns.lookup(url, (err, address) => {
        if (err) {
            obj = {
                error: "invalid"
            }
            res.redirect("/api/shorturl/new")
        } else {
            //gotta fix this too to query style

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

app.get("/api/shorturl/new", (req, res) => {
    res.json(obj)
})

// ---i gotta use async and await. understand these concepts
app.get("/api/shorturl/:id", (req, res) => {
    sites = "/api/shorturl/new";
    var query = shortUrl.findOne({
        _id: req.params.id
    });
    var promise = query.exec();
    promise.then(function(doc) {
        if (doc) {
            console.log(doc)
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