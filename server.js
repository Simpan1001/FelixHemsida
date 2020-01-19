let express = require('express');
let app = express();
let port = process.env.PORT || 2345;

app.use(express.static(__dirname + '/Public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Public/index.html');
});

app.get('/sida2', function(req, res) {
    res.sendFile(__dirname + '/Public/index2.html');
});

app.get('/sida3', function(req, res) {
    res.sendFile(__dirname + '/Public/index3.html');
});

let server = app.listen(port, function() {
    console.log(`The server is up and running on port ${port}`);
});