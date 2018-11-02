const hapi = require('hapi');
const mongoose = require('mongoose');


const DB_URL = `mongodb://localhost:27017/test-db`;


mongoose.connect(DB_URL, {useNewUrlParser: true});
mongoose.connection.once('open', (...args) => {
    console.log('connected to db', args);
});