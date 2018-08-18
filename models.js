const mongoose = require('mongoose');

//schema
const blogPostSchema = mongoose.Schema({
  title:   { type: String, required: true },
  content: { type: String, required: true },
  author:  { 
    firstName: String,
    lastName: String
  },
  created: { type: Date, default: Date.now }
});

blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.author,
    created: this.created
  };
};

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = { BlogPost };


