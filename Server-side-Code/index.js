var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var app = express(); //instance of express
const route = require('./route/routes.js');      //reference to route file


mongoose.connect('mongodb://localhost:27017/shoppinglist');  //path,portNo,Name
mongoose.connection.on('connected', () => {
console.log('Connected to MongoDb');
});
mongoose.connection.on('error' , (err) => {
console.log(err);
});


const PORT = 3000;

app.use(cors());        //middleware used for communicating with different ports
app.use(bodyparser.json());  //middleware used for json parsing

app.use('/api' , route);    //every request having slash will redirect to route.js

app.get('/', (req,res) => {
res.send("Route testing is successful");
});

app.listen(PORT, () => {
    console.log('Server Started at port:'+PORT);
});