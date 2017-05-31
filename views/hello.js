var express = require('express');

var app = expree();

app.get('/',function(req,res){
    res.send('hello world');
});

app.listen(process.env.PORT || 5000);

module.exprorts = app;