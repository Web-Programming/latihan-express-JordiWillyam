 //menjalankan file .env
 require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//load mongodb db connection
require('./app_server/models/db');
//dibawah module" penting
require("./app_server/configs/passport"); //load file config

var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
// tambahan
var mahasiswasRouter = require('./app_server/routes/mahasiswas');
var housingRouter = require('./app_server/routes/housing');
var applyRouter = require('./app_server/routes/apply');
var app = express();

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//middleware -> utk memperbolehkan mengakses dgn localhost berbeda
//Allow CORS

app.use((req,res,next)=> {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
      return res.sendStatus(200); // Tangani preflight request
  }
  next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
// tambahan
app.use('/api', mahasiswasRouter);
app.use('/housing', housingRouter);
app.use('/register', applyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
