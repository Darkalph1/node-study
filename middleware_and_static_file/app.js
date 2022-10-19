let express = require("express");

let app = express();

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function (req, res) {
  res.render("home");
});

app.listen(8080);
