//importing modules
var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
var http = require('http');

var app = express();

const port = 3000;

const route = require('./routes/route.js');

const Skill = require('./modules/skills');

//
//mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/skilllist');
//mongoose.connection.on('connected',function(){
//    console.log('connected to database');
//});
//mongoose.connection.on('err',function(err){
//    if(err)
//        {
//            console.log('error is'+ err);
//        }
//});

app.use(cors());

app.use(bodyParser.json());

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.use('/api', route);

Skill.sync().then(function() {
  http.createServer(app).listen(process.env.PORT, function(){
    console.log('Express server listening on port ' + process.env.PORT);
  });
});
