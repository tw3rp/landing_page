var express = require('express');
var router = express.Router();
var path = require('path');
// home page 
router.get('/', function(req,res,next){
  res.sendFile('maps.html', {root:path.join(__dirname,'../public')});
});

module.exports= router;
