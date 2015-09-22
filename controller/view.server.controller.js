var Animal = require('../models/animal.model.js')

exports.create = function(req, res) {
	var entry = new Animal({
		isAvailable: req.body.isAvailable,
		category: req.body.category,
		variety: req.body.variety,
		gender: req.body.gender,
		age: req.body.age,
		name: req.body.name,
		description: req.body.description,
		dateArrived: req.body.dateArrived

	})

	entry.save();

	//redirect to home page...
	res.redirect(301, '/');
}




