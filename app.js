const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
const indexRouter = require('./routes/index')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: false }))

//= =====ROUTES=============
app.use('/', indexRouter)

const port = process.env.PORT || 1333

app.listen(port, () => {
  console.log(`🚀 Listening on Port ${port}!`)
  console.log(path.join(__dirname, 'views'))
})

module.exports = app