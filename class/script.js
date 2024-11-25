class Person {
  name;
  #age = 49;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get currentAge() {
    return this.#age;
  }

  set currentAge(age) {
    if (age < 50) {
      this.#age = age;
    }
  }
}

const person = new Person("Oleg", 55);

// Programmer
// Designer
// Manager

// class Programmer extends extender(Person, Per) {
//   drinkCoffee() {
//     return "I dring coffee";
//   }

//   coding() {
//     return this.name + " is coding";
//   }
// }

// const person1 = new Person("Grigori", 49);
// const programmer = new Programmer("Kola", 21);

// console.log(programmer.drinkCoffee());
// console.log(programmer.coding());
// programmer.sayHi();
