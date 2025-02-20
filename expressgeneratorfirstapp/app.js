import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser';
import logger from 'morgan'
import hbs from 'hbs'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import formRouter from './routes/formhandling.js'


const app = express();
const __dirname = path.resolve()
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bscss',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')))
app.use('/bsjs',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/form', formRouter);


hbs.registerHelper('isEqual', function (value) {
  return value == "LRA";
});


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

export default app
