const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//schema
const authorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: {
      type: String,
      unique: true
    }
});

const commentSchema = mongoose.Schema({ content: String });

const blogPostSchema = mongoose.Schema({
  title:   { type: String},
  content: { type: String},
  author:  { type: mongoose.Schema.Types.ObjectId, ref: 'Author'},
  created: { type: Date, default: Date.now },
  comments: [commentSchema]
});

blogPostSchema.pre('find', function(next) {
  this.populate('author');
  next();
});

blogPostSchema.pre('findOne', function(next) {
  this.populate('author');
  next();
});

blogPostSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});

blogPostSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    author: this.authorName,
    created: this.created,
    comments: this.comments
  };
};

const Author = mongoose.model('Author', authorSchema);
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = { BlogPost, Author };


