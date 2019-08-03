var express = require('express');
var app = express();
var db = require('./db');

app.get('/api', function (req, res) {
    res.status(200).send('API IS WORKING.');
});

module.exports = app;