var express= require('express');
var index = require('../routes/index');
var pictures = require('../routes/pictures')
//make the router modular so I can add more routes for my projects 
var router = { setupRoutes: function(app){
				app.use('/',index);
				app.use('/pic_webapp',pictures);	
		
		}
	};
module.exports = router;
