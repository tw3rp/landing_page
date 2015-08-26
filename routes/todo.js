var express = require('express');
var mongoose= require('mongoose');
var router = express.Router();
var TODO = require('../models/userlist');
//the schema is located in the models directory which is required here into a variable TODO
//the getTodos function has the find method of mongoose which returns all the documents in the collection in json format which is then sent to the front end and displayed 
var getTodos= function(res){
			TODO.find({},function(err, todos) {
			if (err) res.send(err);
			res.send(todos); 
			});
		};
router.get('/todos', function(req,res){
	TODO.find({},function(err,todos){
		if(err) res.send(err);
	//	res.setHeader('Content-Type', 'application/json');
    	//	res.send({ a: "Rahul" });
		getTodos(res);
	});
});
//the find function returns all the todos to the frontend using the json format
router.post('/todos/create', function(req,res){
//the create is a mongoose method which creates a document in mongoDB which is running	

	TODO.create({
		todo:req.body.todo,
		is_it_done:false,
		}, function(err,todos){
			if(err) res.send(err);
			getTodos(res);
		});
	
});

router.post('/todos/create1',function(req,res){
//for the app to just send the new todo item 
	TODO.create({
		todo:req.body.todo,
		is_it_done:false,
		}, function(err,todos){
			if(err) res.send(err);
		});
});
//This is the delete route which gets the id as the parameter from the angular front end $http post
router.delete('/todos/delete/:todo_id',function(req,res){
		var id = req.params.todo_id;
		console.log(id);
		TODO.findByIdAndRemove(id,function(err,todo){
			if(err) res.send(err);
			getTodos(res);

	});
});


/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendfile('./public/todo.html');
  //just load the index page rest of the interaction is done using json
});

module.exports = router;

