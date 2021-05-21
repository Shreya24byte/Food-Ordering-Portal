var express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

mongoose.connect(
    process.env.MONGO_SERVER_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
  function(err) {
      if(err){
          console.log("error", err);
      } else {
          console.log("Connected successfully")
      }
  });

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const foodRouter = require('./routes/food');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/foodItems', foodRouter);

module.exports = app;
