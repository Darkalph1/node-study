let fs = require("fs");

let myReadStream = fs.createReadStream(__dirname + "/hi.txt");
let myWriteStream = fs.createWriteStream(__dirname + "/write.txt");

myReadStream.pipe(myWriteStream);
