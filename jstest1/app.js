var http = require("http");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    console.log(q.pathname, fileName);
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
