//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const port = 3000;

const route = require('./routes/route.js');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/skilllist');
mongoose.connection.on('connected',function(){
    console.log('connected to database');
});
mongoose.connection.on('err',function(err){
    if(err)
        {
            console.log('error is'+ err);
        }
});

app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));

app.use('/api', route);


app.listen(process.env.PORT || port,function(){console.log('server started at port '+port);});