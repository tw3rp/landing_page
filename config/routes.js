var express= require('express');
var index = require('../routes/index');
var pictures = require('../routes/pictures')
var todo=require('../routes/todo');
var email=require('../routes/email');
//make the router modular so I can add more routes for my projects 
var router = { setupRoutes: function(app){
				app.use('/',index);
				app.use('/pic_webapp',pictures);	
				app.use('/todo',todo);			
		    app.use('/email',email);
    }
	};

module.exports = router;
