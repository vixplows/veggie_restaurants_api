var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
var MongoClient = require('mongodb'),MongoClient;
var db;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.get('/restaurants', function(req, res) {
  db.collection('restaurants').find().sort({"name":1}).toArray(function(err, results) {
    res.json(results);
  });
});

app.post('/restaurants', function(req, res) {
  db.collection('restaurants').save(req.body, function(err, result) {
    res.redirect('/');
  });
});

app.post('/delete', function(req, res) {
  db.collection('restaurants').remove({}, function(err, results) {
      res.redirect('/');
  });
});

MongoClient.connect('mongodb://localhost:27017/vegetarian_restaurants', function(err, database) {
  if(err) {
    console.log(err);
    return
  }

  db = database;

  console.log("Connected to database");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});
