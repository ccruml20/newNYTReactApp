require('dotenv').config({path:'./config/.env'});
const request = require('request');
const express = require('express');
const bodyparser = require('body-parser');
// const articleRouter = require('./routes/articles');
const mongoose = require('mongoose');

const app = express();
port = 3001;

app.use(bodyparser.json());

// app.use('/api/saved', articleRouter);
require('./routes/articles')(app);

// mongoose.createConnection("mongodb://localhost/nytreact");
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;
db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});
db.on("open", function() {
  console.log("Mongoose connection successful.");
});



app.post('/api/search', function(req, res){
  const {searchTerm, begin, end, record} = req.body;
  console.log("im the body_______", req.body);
  const options = { method: 'GET',
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    qs: req.body,
    headers:{
     'api-key': process.env.NYT_API_KEY } };
     console.log(process.env.NYT_API_KEY);

     request(options, function(err, results, body){
       res.json(results);
     });
});


app.listen(port, function(){
  console.log("Your listening to port", port)
});
