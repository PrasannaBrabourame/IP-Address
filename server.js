var Express = require('express');
var bodyParser = require('body-parser');
var parser = require('ua-parser-js');
var app = Express();
app.use(bodyParser.json());
app.get("/", function (req, res) {
    var ua = parser(req.headers['user-agent']);
    var IpSec = [{
        'browserType':ua.browser.name,
        'browserVersion':ua.browser.major,
        'operatingSystemType':ua.os.name,
        'operatingSystemVersion':ua.os.version,
        'IPAddress':(req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress
    }]
    console.log(IpSec);
    res.sendFile(__dirname + "/index.html");
});
app.listen(2000, function (a) {
    console.log("Listening to port 2000");
});