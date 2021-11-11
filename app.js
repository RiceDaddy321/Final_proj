const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

//pull in axios
const axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'ejs');

//for debugging
var counter = 0;
var btn = document.querySelector(".button");

function updateCounter()
{
    counter++;
    console.log(counter);
}

btn.addEventListener("click", updateCounter);