// create web server
const express = require('express');
const app = express();
// create web server
const comments = require('./comments');
// create web server
app.get('/comments', (req, res) => {
  res.json(comments);
});
// create web server
app.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000');
});