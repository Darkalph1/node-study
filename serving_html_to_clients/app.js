let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, "Content-Type", "text/html");
    let readStream = fs.createReadStream(__dirname + "/index.html");
    readStream.pipe(res);
  })
  .listen(8080);
