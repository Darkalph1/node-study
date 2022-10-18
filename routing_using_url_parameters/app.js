let express = require("express");

let app = express();

app.get("/", function (req, res) {
  res.send("this is home page");
});

app.get("/profile/:id", function (req, res) {
  res.send("you requested for a profile with id of " + req.params.id); // dynamic request dealer
});

app.listen(8080);
