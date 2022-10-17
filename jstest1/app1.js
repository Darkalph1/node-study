let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer(function (req, res) {
    let urlObj = url.parse(req.url, true);
    let fileName = "." + urlObj.pathname;

    fs.readFile(fileName, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("404 error");
        res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
