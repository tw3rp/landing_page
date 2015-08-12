var LocalStrategy = require ('passport-local').Strategy;
//require the schema

var User = require('../models/schema');

module.exports = function(passport){
	
		//serialize the user
		passport.serializeUser(function(user, done){
			done(null,user.id);
		});

		//deserialize the user
		passport.deserializeUser(function(id,done){
			User.findById(id,function (err,user){
			done(err,user);
			});
		});

		passport.use('local-signup', new LocalStrategy({
		
		usernameField: 'email',
		passwordField : 'password',
		passReqToCallback : true
		},
		function(req,email,password,done){
		
		process.nextTick(function(){
		//find the email if ir matchses with the db
		//find if the user is logged in already 
		User.findOne({'local.email': email}, function(err,user){
		if (err)
			return done(err);
		if (user){
			return done(null,false,req.flash('signupMessage', 'That email is already used'));
		} else {
		var newUser = new User();
		//set what the user has inputted
		newUser.local.email = email;
		newUser.local.password = newUser.generateHash(password);
		
		// save to the db
		newUser.save(function(err){
			if(err)
				throw err;
			return done(null,newUser);
		});
	}
});

});
	}));
};
		
		
