var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/mongoBDT';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});	

// se establece el motor del front
app.set('view engine', 'pug');
// Links a las carpetas de vista y estatica
app.set('views', './views');
app.use(express.static('public'));

// John: Te faltó la ruta del / y mostrar el template
app.get('/', function (req, res) {
  res.render('index');
});


app.listen(3001, function(){
	console.log("Starting on port 3001");
});
