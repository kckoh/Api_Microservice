var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var personSchema = new mongoose.Schema({
    name:String,
    age: Number,
    faveriteFoods: [String]
}
);

//var Person = mongoose.model("Person", personSchema);

//var joon = new Person({name:"joon", age: 21, faveriteFoods:["ice cream","melon"]  });