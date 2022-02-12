var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From my_project" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World 2022" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works!  2022" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
