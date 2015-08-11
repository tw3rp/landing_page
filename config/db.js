var mongoose= require('mongoose');
var models = require('../models/schema');

var conn= mongoose.connection;
var uri='mongodb://localhost/schema';

conn.on('error',console.error.bind(console,"mongoose connection error"));
conn.once('open',function(){
		console.log("connected to "+uri);
});

mongoose.connect(uri);
module.exports=conn;
