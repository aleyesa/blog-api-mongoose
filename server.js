const express = require('express');

const morgan = require('morgan');

// const {BlogPosts} = require('model');

const app = express();

app.use(morgan('common'));


app.listen(8080, () => console.log('app listening on port 8080.'));