let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer(function (req, res) {
    if (req.url === "/" || req.url === "/home") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/home.html").pipe(res);
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/contact.html").pipe(res);
    } else if (req.url == "/api") {
      res.writeHead(200, { "Content-Type": "application/JSON" });
      var myObj = {
        name: "Alan",
        status: "king",
        hi: "hello",
      };
      res.end(JSON.stringify(myObj)); // JSON.stringify is used to convert object into string
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.createReadStream(__dirname + "/error.html").pipe(res);
    }
  })
  .listen(8080);
