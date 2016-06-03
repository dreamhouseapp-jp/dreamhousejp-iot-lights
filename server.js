var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    bodyParser = require('body-parser'),
    request = require('request'),
    cors = require('cors'),
    app = express();

var HUE_BRIDGE_URL = process.env.HUE_BRIDGE_URL;
var HUE_BRIDGE_USER = process.env.HUE_BRIDGE_USER;
var baseURL = HUE_BRIDGE_URL + '/api/' + HUE_BRIDGE_USER + '/lights/';

console.log(HUE_BRIDGE_URL);
console.log(HUE_BRIDGE_USER);
console.log(baseURL);


app.use(bodyParser.json());

app.use(cors());

app.use('/', express.static(__dirname + '/www'));

// Set light state
app.put('/lights/:id', function (req, res) {
    var lightId = req.params.id;
    console.log(req.body);
    var bri = req.body.bri;
    request.put({url: baseURL + lightId + '/state', json: {on:bri>0, bri: parseInt(bri)}},
        function(err, httpResponse, body) {
            if (err) {
                console.log(err);
                res.status(500).send({ error: err });
            } else {
                console.log("light " + lightId + " bri " + bri);
                res.send("ok");
            }
        });
});

// Retrieve all the lights registered with the bridge
app.get('/lights', function(req, res) {
    console.log("/lights");
    request.get({url: baseURL},
        function(err, httpResponse, body) {
            if (err) {
                console.log(err);
                res.status(500).send({ error: err });
            } else {
                res.json(JSON.parse(body));
            }
        });
});


console.log("Starting server...");
https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(55555);