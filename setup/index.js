exports= module.exports = function(passport, services){
	return{
		everything: require('./everything.js')(services,passport)
	};
};
