var express = require('express')
const path = require('path');
var homeRouter = express.Router()

//middleware that is specific to this router
homeRouter.use('/',function (req, res, next) {
    res.render('index.ejs')
    next() //just filler
})

//detect random click
homeRouter.post('/random', function(req, res, next) {
    console.log("random")
})
//detect independent click
homeRouter.post('/independent', function(req, res, next) {
    console.log("independent")
})
// // define the home page route
// router.get('/', function (req, res) {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', function (req, res) {
//   res.send('About birds')
// })

module.exports = homeRouter