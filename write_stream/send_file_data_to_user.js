let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    let readStream = fs.createReadStream(__dirname + "/hi.txt", "utf8");

    readStream.pipe(res);
  })
  .listen(8080);
