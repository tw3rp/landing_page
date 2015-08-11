var express = require('express');
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('../public/index.html');
});

router.get('/hello',function(req,res){
	res.send("Hello World1");	
});
module.exports = router;
