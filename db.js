
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');
let db = mongoose.connection;

// Check for Db errors
db.on('error', (err) => console.log(err))

// check connection
db.once('open', () =>  {
    console.log("connected to mongodb")
    app.listen(3000,() => console.log("server running at 3000"));
})

module.exports = db;
