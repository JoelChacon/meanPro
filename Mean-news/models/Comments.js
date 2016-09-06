var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({

	body: String,
	author: String,
	upvotes: {type: Number, defualt: 0},
	post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}

});

module.exports = mongoose.model('Comment', CommentSchema);
