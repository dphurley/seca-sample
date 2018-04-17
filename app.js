const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// view engine setup
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongo connection set-up
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
  console.log('Mongoose has connected to MongoDB!')
})

mongoose.connection.on('error', (error) => {
  console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
  process.exit(-1)
})


// Register controllers
const favorites = require('./routes/favorites')
app.use('/api/favorites', favorites);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = 'development' === req.app.get('env') ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
