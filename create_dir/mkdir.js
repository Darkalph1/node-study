let fs = require("fs");
// async method
fs.mkdir("node_dir", function () {
  console.log("mkdir");
});

// sync method

// fs.mkdirSync("node_dir");
