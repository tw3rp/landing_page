var express= require('express');
var index = require('../routes/index');
//make the router modular so I can add more routes for my projects 
var router = { setupRoutes: function(app){
				app.use('/',index);
			}
	};
module.exports = router;
