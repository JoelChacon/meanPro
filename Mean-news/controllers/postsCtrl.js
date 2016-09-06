var Posts = require('../models/posts');

var handlePost = function(req, res) {
	Posts.create(req.body, function(error, post) {
		console.log("response", post);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(post);
		}     
	})
};
////
var handleGetAll = function(req, res) {
	Posts.find(req.body, function(error, posts) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(posts);
		}
	})
}
////
var handleFindOne = function(req, res) {
	Posts.findById(req.params.id, function(error, post) {
		if(error) {
			res.status(500).json(error);
		} else {
			res.json(post);
		}
	})
}

module.exports = {
	post: handlePost,
	getAll: handleGetAll,
	getOne: handleFindOne
};