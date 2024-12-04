require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var registerRouter = require('./app_server/routes/register');

//untuk mengatasi error cors
var cors = require('cors');

//load mongodb db connection (jangan lupa npm install mongoose) 
//{tambahkan kode dibawah ini yang mengarah ke kode db tadi yaitu './app_server/models/db'}

require('./app_server/models/db');
// harus dibawah depedensi lainnya
require("./app_server/configs/passport"); //load file config passport

//Daftar router
var indexRouter = require('./app_server/routes/index');
var usersRouter = require('./app_server/routes/users');
var mahasiswasRouter = require("./app_server/routes/mahasiswas");
var housingRouter = require("./app_server/routes/housing");

var app = express();

// untuk mengatasi error cors
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Midleware untuk mengatasi CORS
app.use((req,res,next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

//list router yang digunakan
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/mahasiswa',mahasiswasRouter);
app.use('/housing',housingRouter)



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
