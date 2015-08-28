var mongoose = require('mongoose');
var Schema =mongoose.Schema;

var emailSchema= Schema({
		email: {type:String, required:true, default:''},
	//	firstname: {type:String, required:false, default:''},
	//	message: {type:String, required:true, default:''}
		});
var Email = mongoose.model('EMAIL',emailSchema);
module.exports= Email;
