const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const route = require('./routes/route');

const db = require('./db');
const app = express();

// // Pug Template
// app.set('views', './views')
// app.set('view engine', 'pug');

// Setting Middleware
app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(cors);

app.use(route)

// Environment variables
const environment = process.env.port;
console.log(environment)

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3000,() => console.log("server running at 3000"));
})







