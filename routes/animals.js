var express = require('express');
var router = express.Router();
var animalCtrl = require('../controller/view.server.controller.js')


//PUT
router.put('/', function(req, res, next) {
  Animal.update({description:req.body.description},{$set:{isCompleted:true}}, function(err, tasks){
    res.send(tasks);
  })
});

//DELETE
router.delete('/', function(req, res, next) {
  // Animal.findByIdAndRemove(req.body);
  Animal.remove({}, function(err, tasks){
   res.send();
  })
})


/* GET home page. */
router.get('/', function(req, res, next) {
  Animal.find({}, function(err, tasks){
    res.send(tasks);
  })
});

// POST 
// router.post('/', function(req, res) {
//   var animal = new Animal(req.body);
//   animal.save(function(err, savedUser){
//   	console.log('hello');
//     res.send();
//   })

// });

router.post('/newnote', function(req, res) {
  return animalCtrl.create(req, res);
});

module.exports = router;