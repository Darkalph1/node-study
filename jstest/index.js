var http = require("http");
// const myDateTime = require("./dateModule");
const hi = require("./dateModule");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("king");
//     res.end();
//   })
//   .listen(8080);

console.log(hi.myDateTime());
