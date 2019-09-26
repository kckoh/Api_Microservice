const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  context:String
})

//create model for todo
const Todo = mongoose.model('Todo', TodoSchema);

var firstodo = new Todo({context: "Whatever"})
// firstodo.save( (err)=>{
//     if (err) return handleError(err);
// } )

module.exports = Todo;