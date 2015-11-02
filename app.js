var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var orm = require('orm');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// /*数据库user_message表*/
// app.use(orm.express("mysql://root:@127.0.0.1/baidu_news", {
//   define: function(db, models, next) {
//     models.user_message = db.define("user_message", {
//       user_id: {
//         type: 'serial',
//         key: true
//       },
//       user_name: String,
//       user_password: String
//     });
//     next();
//   }
// }));
// /*数据库news表*/
// app.use(orm.express("mysql://root:@127.0.0.1/baidu_news", {
//   define: function(db, models, next) {
//     models.news = db.define("news", {
//       news_id: {
//         type: 'serial',
//         key: true
//       },
//       news_title: String,
//       news_img: String,
//       news_content: String,
//       news_source: String,
//       add_times: String,
//       news_sort: String
//     });
//     next();
//   }
// }));


module.exports = app;
