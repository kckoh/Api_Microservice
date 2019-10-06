var express = require('express');
var path = require("path")
var app = express();
var engines = require('consolidate');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', engines.mustache);
app.set('view engine', 'html');


app.get("/", (req,res)=>{
    res.render("index.html")
} )

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});
