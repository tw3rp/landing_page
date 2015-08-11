var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
	local : {
	email:String,
	password:String,
}});

//generate a hash

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

//checking if it is valid

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password,this.local.password);
};

//export it 

module.exports = mongoose.model('User', userSchema);
