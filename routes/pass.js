
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var pass = {setupPass: function(app){

	app.use(session({secret:'thisisaverysercetysecret'}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());

}
};

module.exports = pass;
	
