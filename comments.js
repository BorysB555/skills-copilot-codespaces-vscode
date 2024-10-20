//create web server
var express = require('express');
var app = express();

//create route
app.get('/comments', function(req, res) {
    res.send('This is the comments page!');
});

//start server
app.listen(8080);
console.log('Server started on port 8080');
