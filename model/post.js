const mongoose = require('mongoose');

// Check if the model already exists
const Post = mongoose.models.post || mongoose.model('post', new mongoose.Schema({
  id:{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true }));

module.exports = Post;
