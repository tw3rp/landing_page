var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');
//get the login page
router.get('/login',function(req,res){
	res.sendFile('login.html',{root:path.join(__dirname,'../public')});
//	res.json({message:req.flash('loginMessage')});
});

router.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.sendFile('signup.html',{root:path.join(__dirname,'../public')});

    });

router.post('/signup',passport.authenticate('local-signup',{
		successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

module.exports= router;
