const express = require('express');
const bodyParser = require('body-parser');

const route = require('./routes/route');

const db = require('./db');
const app = express();

app.use(route);

// Pug Template
app.set('views', './views')
app.set('view engine', 'pug');

app.use(bodyParser.json());

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3000,() => console.log("server running at 3000"));
})








