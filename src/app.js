const express = require('express');
const app = express();

//settings
app.set('port', 5000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.use(require('./routes/index'));

//Statics
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;