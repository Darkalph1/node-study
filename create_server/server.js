let http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hi");
    res.end();
  })
  .listen(3000);
