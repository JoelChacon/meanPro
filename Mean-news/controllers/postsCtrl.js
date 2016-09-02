var Posts = require('../models/posts');

exports.handlePost = function(req, res) {
	Posts.create(req.body, function(error, response) {
		console.log("response", response);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(response)
		}     
	})
};