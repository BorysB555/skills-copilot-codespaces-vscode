//create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require(commentsPath);
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);

  fs.writeFile(commentsPath, JSON.stringify(comments), (err) => {
    if (err) {
      res.status(500).send('An error occurred');
    } else {
      res.json(newComment);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});