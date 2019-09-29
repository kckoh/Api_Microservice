var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


var fruitSchema = new mongoose.Schema({
    _id: Number,
    fruit: String
}
);

var Fruit = mongoose.model("Fruit", fruitSchema);

function getNextSequenceValue(sequenceName){

   var sequenceDocument = db.counters.findAndModify({
      query:{_id: sequenceName },
      update: {$inc:{sequence_value:1}},
      new:true
   });

   return sequenceDocument.sequence_value;
}


db.fruits.insert({
   "_id":getNextSequenceValue("productid"),
   "fruit":"banana"
})


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








