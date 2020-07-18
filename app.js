const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const router = require('./router')
require('dotenv').config()
//For BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.json({
    success: true,
    date: new Date()
  })
});

router.init(app)

app.listen(5000, function (err) {
  if (!err)
    console.log("Site is live in port 5000")
  else console.log(err)
});

module.exports = app
