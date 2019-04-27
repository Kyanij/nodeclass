const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

let Article = require('./models/article');

const app = express();

app.use(bodyParser.json());

const users = [
    {
        id:1,
        name:"ken",
        age:24
    },
    {
        id:2,
        name:"Haryy",
        age:22
    }
];

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    let user = users.filter((user) => user.id == id);
    res.send(user);
});



// routes
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

app.get('/articles/:id', (req,res) => {
    let id = req.params.id;
    Article.findById(id,(err,article) => {
        if(err) res.send({error:err.message})
        res.send(article);
    })
});

app.put('/articles/edit/:id', (req,res) => {
    let id = req.params.id;
    Article.findByIdAndUpdate(id,{author:"Kyanij Maharjan"}, (err,updateArticle)=> {
        if(err) res.send({error:error.message})
        res.send("Succesfully updated");
    })
});

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3000,() => console.log("server running at 3000"));
})







