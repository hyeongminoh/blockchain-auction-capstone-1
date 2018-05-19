const createError = require('http-errors');
const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs');
const app = express();
const router = require('./router/router')(app);
const db = require('./db.js');
const sha256 = require('sha256');


// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());


app.use(express.static('public'));

//for pretty print
app.locals.pretty = true;


const server = app.listen(3000, function () {
  console.log('Listening on port 3000');
});
