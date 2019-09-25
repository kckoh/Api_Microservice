const express = require ('express');
const router = express.Router();
const Todo = require('./todos');

router.get('/todos', (req, res, next) => {

  //this will return all the data, exposing only the id and action field to the client
  Todo.find({context:"Whatever"})
    .then(data => res.json(data))
    .catch(next)
});


router.post('/todos', (req, res, next) => {
  if(req.body.context){
    Todo.create(req.body)
      .then(data => res.json(data))
      .catch(next)
  }else {
    res.json({
      error: "The input fields is empty"
    })

  }
});

router.delete('/todos/:id', (req, res, next) => {
  Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router;