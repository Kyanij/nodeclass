const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/news');
let db = mongoose.connection;

module.exports = db;