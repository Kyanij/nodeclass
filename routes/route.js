const express = require('express');
let Article = require('../models/article');

const app = express();

// routes

app.get('/',(req,res) => {
    res.render('index', {title:'Pug template', message:"hello kyanij", content:"This is me"});
});

// app.get('/articles/new', (req,res) => {
//     res.render('index', { message:"this is form"})
// })

app.get('/articles',(req,res) => {
    console.log('asdfafdkjaklf')
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

// Find by Id
app.get('/articles/:id', (req,res) => {
    const id = req.params.id;
   Article.findById(id,(err, info) => {
        if(err) res.json({error:"Something wrong"})
        res.render('index', {title:'Pug template', message:"hello kyanij", content: info})
    });
    
})

// Update by Id 
app.put('/articles/:id', (req,res) => {
    const id = req.params.id;

    Article.findByIdAndUpdate(req.body,id, {$set:req.body}, (err,update) => {
        if(err) res.json({error: err.message})
        res.send(update)
    })
})


module.exports = app;
