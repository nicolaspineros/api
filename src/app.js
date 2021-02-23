const express = require('express');
const app = express();
const path = require('path');
const morgan  = require('morgan');

//settings
app.set('port', 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/index'));


module.exports = app;