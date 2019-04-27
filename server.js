const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

let Article = require('./models/article');

const app = express();

// Pug Template
app.set('views', './views')
app.set('view engine', 'pug');

app.use(bodyParser.json());

// routes
app.get('/',(req,res) => {
    res.render('index', {title:'Template', message:"hello there"});
});

app.get('/articles',(req,res) => {
    Article.find(function(err, articlesList) {
        if(err) res.send({error: err.message})
        res.send(articlesList)
    })
});

app.post('/articles',(req,res) => {
    console.log(req.body);
    const data = req.body;
    Article.create(data, (err,createData)=> {
        if(err) res.send({error: err.message})
        res.send(createData)
    })
});

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3000,() => console.log("server running at 3000"));
})







