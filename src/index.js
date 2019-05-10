var express = require("express");
var fs = require("fs");


var app = express();

app.listen(8000, () => {
  console.log("Server running on port 3000");
});

app.get("/", function (req, res) {
  let response = {
      "Response": "Server is running."
  }
  res.send(response);
});

app.get("/characters", function (req, res) {
  fs.readFile(__dirname + "/" + "characters.json", 'utf8', function (err, data) {
      var users = JSON.parse(data);
      res.end(JSON.stringify(users));
  });
});


app.get('/characters/:id', function (req, res) {
  fs.readFile(__dirname + "/" + "characters.json", 'utf8', function (err, data) {
      var users = JSON.parse(data);
      var user = users["character" + req.params.id];
      console.log( user );
      if (user) {
          res.end(JSON.stringify(user));
      } else {
          res.end(err);
      }
  });
});
