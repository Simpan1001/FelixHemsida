let express = require('express');
let app = express();
let port = process.env.PORT || 2345;

app.use(express.static(__dirname + '/Public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Public/newsFeed.html');
});
app.get('/sida1', function(req, res) {
    res.sendFile(__dirname + '/Public/index1.html');
});
app.get('/sida2', function(req, res) {
    res.sendFile(__dirname + '/Public/index2.html');
});
app.get('/sida3', function(req, res) {
    res.sendFile(__dirname + '/Public/index3.html');
});
app.get('/sida4', function(req, res) {
    res.sendFile(__dirname + '/Public/index4.html');
});
app.get('/sida5', function(req, res) {
    res.sendFile(__dirname + '/Public/index5.html');
});

app.get('/Plattform-Blast', function(req, res) {
    res.sendFile(__dirname + '/Public/Plattform-Blast/PlattformBlast.html')
});

let server = app.listen(port, function() {
    console.log(`The server is up and running on port ${port}`);
});