let express = require('express');
let app = express();
let port = process.env.PORT || 2345;

app.use(express.static(__dirname + '/Public'));


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/Public/Sidor/WhatsNew.html');
});
app.get('/sida1', function(req, res) {
    res.sendFile(__dirname + '/Public/Sidor/SunesJul.html');
});
app.get('/sida2', function(req, res) {
    res.sendFile(__dirname + '/Public/Sidor/SmaDemon.html');
});
app.get('/sida3', function(req, res) {
    res.sendFile(__dirname + '/Public/Sidor/Latar.html');
});
app.get('/sida4', function(req, res) {
    res.sendFile(__dirname + '/Public/Sidor/TheFatRat.html');
});
app.get('/sida5', function(req, res) {
    res.sendFile(__dirname + '/Public/Sidor/DaftPunk.html');
});

app.get('/Plattform-Blast', function(req, res) {
    res.sendFile(__dirname + '/Public/Plattform-Blast/PlattformBlast.html')
});
app.get('/Felix-Pub-Shootout', function(req, res) {
    res.sendFile(__dirname + '/Public/Felix-Pub-Shootout/FPS.html')
});

let server = app.listen(port, function() {
    console.log(`The server is up and running on port ${port}`);
});