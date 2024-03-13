const express = require('express');
// set up database
const db = require('./config/mongoose');
const port = 8000;
const app = express();

const expressLayouts = require('express-ejs-layouts');
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style 
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', require('./routes'));
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is running on the port: ${port}`);
});
