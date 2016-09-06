var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
 
  	title: String,
  	link: String,
  	upvotes: {type: Number, default: 0},
  	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

});

module.exports = mongoose.model('Post', PostSchema);