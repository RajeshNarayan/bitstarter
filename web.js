var express = require('express')
    , fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  var dbuf = fs.readFileSync("index.html");
  var data = dbuf.toString("utf8");
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
