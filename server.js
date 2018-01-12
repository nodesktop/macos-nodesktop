

// https://youtu.be/kHV7gOHvNdk

var express = require('express');
var app = express();							// create express application
var port = process.env.PORT || 3000;            // deploy with Heroku environment


app.use(express.static(__dirname + "/public"));	// use assets in public directory

// app.get('/', function (req, res) {
// 	res.send("Hello from server.js");
// });


/*
var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 600000); // every 10 minutes (600000)
*/

app.listen(port);
console.log("server running on port 3000");
