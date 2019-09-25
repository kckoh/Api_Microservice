var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}


var Kitten = mongoose.model('Kitten', kittySchema);

var poo = new Kitten({name: "poo"})


var personSchema = new mongoose.Schema({
    name:String,
    age: Number,
    faveriteFoods: [String]
}
);

var Person = mongoose.model("Person", personSchema);

var joon = new Person({name:"joon", age: 21, faveriteFoods:["ice cream","melon"]  });
var bang = new Person({name:"bang", age: 23, faveriteFoods:["kimchi", "apple"]  });

//Save
// bang.save(function(err) {
//     if (err) return handleError(err);
// } )

//query
Person.findOne({ 'name': 'bang' }, function (err, person) {
  if (err) return handleError(err);
  // Prints name likes favorite food
  console.log('%s likes %s.', person.name, person.faveriteFoods[0]);
});

//delete






