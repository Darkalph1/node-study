class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  printPerson = () =>
    console.log(
      `name : ${this.name}, age : ${this.ages} gender : ${this.gender}`
    );

  isPersonWithGender = (gender) => {
    if (this.gender == gender) {
      return "yes";
    } else {
      return "no";
    }
  };
}

module.exports = Person;
