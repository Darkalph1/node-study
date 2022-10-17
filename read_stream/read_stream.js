let fs = require("fs");

let myReadStream = fs.createReadStream(__dirname + "/hi.txt");

myReadStream.on("data", function (chunk) {
  console.log("new chunk received:");
  console.log(chunk);
});

//reading stream of data while buffer send the data out
