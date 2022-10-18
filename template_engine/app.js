let express = require("express");

let app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});

app.get("/profile/:name", function (req, res) {
  let person = {
    age: 36,
    jobTitle: "King",
    Hobbies: ["eating", "sleeping", "coding"],
  }; // pusdo data
  res.render("profile", { profile: req.params.name, person: person }); //render profile.ejs and giving data to the render
});

app.listen(8080);
