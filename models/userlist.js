var mongoose = require('mongoose');
var Schema= mongoose.Schema;
var todoSchema=Schema ({
	todo:{type:String, required:true},
	is_it_done: {type:Boolean , default: false}
});
var Todo = mongoose.model('TODO', todoSchema);

module.exports= Todo;
