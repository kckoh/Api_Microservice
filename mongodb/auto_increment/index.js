var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

autoIncrement.initialize(db);


var colorSchema = new mongoose.Schema({
    color: String
}
);
colorSchema.plugin(autoIncrement.plugin, 'Color');

var Color = mongoose.model("Color", colorSchema);

var yello = new Color({color:"yello"})

// yello.save((err) => {if (err) return handleError(err)} )

//Save
// bang.save(function(err) {
//     if (err) return handleError(err);
// } )

//query
// Person.findOne({ 'name': 'bang' }, function (err, person) {
//   if (err) return handleError(err);
//   // Prints name likes favorite food
//   console.log('%s likes %s.', person.name, person.faveriteFoods[0]);
// });








