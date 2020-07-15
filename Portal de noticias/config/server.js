var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/Views');

app.use(bodyParser.urlencoded({extended: true})); //middleware
app.use(expressValidator()); //middleware
app.use(express.static('./app/public')); //middleware

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/Models')
    .then('app/Controllers')
    .into(app);

module.exports = app;