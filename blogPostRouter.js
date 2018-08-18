const express = require('express');

const router = express.Router();

const { BlogPost } = require('./models');

router.get('/posts', (req, res) => {
  BlogPost.find()
  .sort( {created: 'desc' } )
  .then(blogposts => {
    res.json({
      blogposts: blogposts.map(blogposts => blogposts.serialize())
    });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' })
  });
});

router.get('/posts/:id', (req, res) => {
  BlogPost.findById(req.params.id)
  .then(blogposts => res.json(blogposts.serialize()))
  .catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

router.post('/posts', (req, res) => {
    const requiredFields = ['title', 'content', 'author'];
    for (let i = 0; i < requiredFields.length; i++) {
      const field = requiredFields[i];
      if (!(field in req.body)) {
        const message = `Missing \`${field}\` in request body`;
        console.error(message);
        return res.status(400).send(message);
      }
    }
  
    BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      author: {
        firstName: req.body.author.firstName,
        lastName: req.body.author.lastName
      },
      created: req.body.created
    })
    .then(blogposts => res.status(201).json(blogposts.serialize())
    .catch(err => {
      res.status(500).json({ message: 'Internal server error' });   
    }));
});

router.put('/posts/:id', (req,res) => {
  if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
    const message =
      `Request path id (${req.params.id}) and request body id ` +
      `(${req.body.id}) must match`;
    console.error(message);
    return res.status(400).json({ message: message });
  }

  const toUpdate = {};
  const updateableFields = ['title', 'content', 'author'];

  updateableFields.forEach(field => {
    if (field in req.body) {
      toUpdate[field] = req.body[field];
    }
  });

  BlogPost
    .findByIdAndUpdate(req.params.id, { $set: toUpdate })
    .then(blogposts => res.status(204).end())
    .catch(err => res.status(500).json({ message: "Internal server error" }));
});

router.delete('/posts/:id', (req, res) => {
  BlogPost
  .findByIdAndRemove(req.params.id)
  .then(blogposts => res.status(204).end())
  .catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });
});

module.exports = router;