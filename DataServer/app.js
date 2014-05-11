var express = require('express');

//Setup expressjs
var app = express();
app.set('port',  1963);
app.use(express.json());

//add post api
app.post('/api/values', function(req, res) {
    console.log('%j', req.body);

    res.end();
});

//start server
var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});