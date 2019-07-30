var createError = require('http-errors');
var express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')
const helpers = require('./helpers/helpers')

var mainRoute = require('./routes/main');

var app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main_layout', helpers}))
app.set('view engine', 'handlebars')

//Parsers
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//Serve static files for css, js, etc.
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser())

app.use('/', mainRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error  = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(`\nError: ${err.message}`);
  
  next()
});

app.listen(3000, () => {
	console.log(`Server started on port 3000`);
});