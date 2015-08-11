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

module.exports= router;
