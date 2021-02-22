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
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));

//Statics
app.use(express.static(path.join(__dirname, 'public')));


// 404 handler
app.use((req, res, next) => {
    res.status(404).render('404 Not found');
});

module.exports = app;