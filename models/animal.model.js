var mongoose =require('mongoose');
var Schema = mongoose.Schema;


var animalSchema = new Schema( {
	isAvailable: {type: Boolean, required: true},
	category:{type: String, required: true},
	variety: {type: String, required:false},
	gender: {type: String, required:true, default: 'Unknown'},
	age: {type: Number, required:false},
	name: {type: String},
	description: {type: String, required: false},
	dateArrived: {type: Date, required:true}

});

module.exports = mongoose.model('Animal',animalSchema);