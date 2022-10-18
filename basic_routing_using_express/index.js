let express = require("express");

let app = express();

app.get("/", function (req, res) {
  res.send("this is home page"); //it doesn't need res.writeHead because express knows what we are sending
});

app.get("/contact", function (req, res) {
  res.send("this is contact page");
});

app.listen(8080);

// let express = require("express");

// //let app = express();

// express().get("/", function (req, res) {
//   res.send("this is home page"); //it doesn't need res.writeHead because express knows what we are sending
// });

// express().get("/contact", function (req, res) {
//   res.send("this is contact page");
// });

// express().listen(8080);
