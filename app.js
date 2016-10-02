var express = require('express');
var app = express();
var routes = require('./routes');


app.set('view engine', 'ejs');
app.locals.pagetitle = "Awesome Website ";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res) {
  res.send("This is a bad ROUTE");
});


var server = app.listen(3000, function() {
  console.log(200, 'Ok');
  console.log("Listening on Port: 3000");
});
