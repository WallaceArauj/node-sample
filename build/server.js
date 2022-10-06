"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Express
var express = require("express");
var app = express();
var port = 3000;
// CODE HERE
app.get('/', function (request, response) {
    response.send('Hello World!');
});
app.get('/partipantes', function (request, response) {
    response.send('Hello partipante!');
});
app.listen(port, function () {
    console.log("SERVER IS RUNNING AT PORT ".concat(port, "!"));
});
