let http = require("http");
let fs = require("fs");

http
  .createServer(function (req, res) {
    res.writeHead(200, "Content-Type", "application/json");
    let myObj = {
      name: "foo",
      job: "none",
    };
    res.end(JSON.stringify(myObj));
  })
  .listen(8080);
