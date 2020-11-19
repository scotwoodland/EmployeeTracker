const path = require('path');

module.exports = function (app){

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '/home'))
    });

    app.get('/tables', function(req, res) {
        res.sendFile(path.join(__dirname, '/tables'));
        console.log("view table page"); 
      });

    app.get('/reserve', function(req, res){
        res.sendFile(path.join(__dirname, '/reserve'));
        console.log("make reservation page");  
    });

  
};