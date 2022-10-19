let express = require("express");

let app = express();

app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
  res.render("profile_form", { qs: req.query });
});

// http://localhost:8080/?dept=marketing&person=joe
// req for getting output

app.listen(8080);
