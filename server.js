var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/views"));

// routes
app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function() {
    console.log("app running");
})