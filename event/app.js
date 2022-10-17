const Person = require("./person.js");
const event = require("events");

const person = new Person("fouzan", 28, "male");

console.log(person.isPersonWithGender("male"));
