var express= require('express');
var index = require('../routes/index');
var pictures = require('../routes/pictures')
var todo=require('../routes/todo');
//make the router modular so I can add more routes for my projects 
var router = { setupRoutes: function(app){
				app.use('/',index);
				app.use('/pic_webapp',pictures);	
				app.use('/todo',todo);			
		}
	};

module.exports = router;
