//create express instance
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const htmlParser = require('htmlparser');
const path = require('path');

//start express
var app = express();

//important stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/public'));
app.use(express.static(path.join(__dirname + '/public')));

//make the axios variable
const axios = require("axios");

//try to use external module
var birds = require('./public/scripts/bird');
var home = require('./public/scripts/buttons');
app.use('/birds', birds);
app.use('/', home);

app.listen(3000, () => console.log("server has been started"));
  