// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();


// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making requests from a js file
  // that we are also serving (as static assets in public)
// app.use(function(request, response, next) {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// ROUTES
// Root Route
app.get('/', function (req, res) {
  res.sendFile("views/index.html", {root: __dirname});
})

var num = 10;

app.get('/guess-a-number', function (req, res) {
  
  var guess = req.query.guess;
  var guess = parseInt(req.query.number);
  console.log(guess);
  if (guess === num) {
    res.send('You nailed it!');
  } else if (guess > num) {
    res.send('Too high');
  } else if (guess < num) {
    res.send('Too low');
  }

})


// Gallery View Route


// The Number Guessing Game


// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
