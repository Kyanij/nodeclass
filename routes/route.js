const express = require('express');
let Article = require('../models/article');

const app = express();

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

module.exports = app;
