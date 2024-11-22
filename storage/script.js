// const result = document.querySelector("#result");
// const input = document.querySelector("#input");
// const button = document.querySelector("#btn");

// result.innerText = sessionStorage.getItem("name");
// const person = sessionStorage.getItem("person");

// console.log(JSON.parse(person));

// button.addEventListener("click", () => {
//   const value = input.value;

//   const person = {
//     name: "Igor",
//     age: 25,
//   };

//   sessionStorage.setItem("person", JSON.stringify(person));

//   document.cookie = "name=Igor; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";

//   sessionStorage.setItem("name", value);

//   result.innerText = value;
// });

// localStorage
// sessionStorage
// document.cookies

// const animal = {
//   hello: "Mow",
//   lastHello: "",

//   set hi(hello) {
//     this.lastHello = this.hello;
//     this.hello = hello;
//   },

//   get hi() {
//     console.log("Last hello:", this.lastHello);
//     console.log("This hello:", this.hello);
//   },

//   sayLastHello() {
//     console.log(this.lastHello);
//   },

//   sayHello() {
//     console.log(this.hello);
//   },
// };

// animal.hi = "Gow";
// animal.hi;

// const promise = new Promise((res) => {
//   setTimeout(() => {
//     return new Promise((resolve) => {
//       resolve("Hello");
//     });
//   }, 1_000);
// });

// const getUserPromise = new Promise((resolve) => {
//   setTimeout(resolve, 1_000, "Oleg");
// });

// const upperCaseUserPromise = (name) => {
//   return new Promise((res) => {
//     res(name.toUpperCase());
//   });
// };

// const addSecondName = (name) => {
//   return new Promise((resolve) => {
//     resolve(name + " Olegovich");
//   });
// };

// getUserPromise
//   .then(addSecondName)
//   .then(upperCaseUserPromise)
//   .then((upperName) => console.log(upperName));

document.getElementById("name"); // только по id
document.querySelector(".name"); // по классу (вернет только первый класс с таким названием)
document.querySelector("#name"); // по id
document.querySelector("[data-type]"); // обращение по пою data

document.getElementsByClassName("name"); // массив HTML элементов
document.querySelectorAll(".name"); // получим массив HTML элементов
document.querySelectorAll("[data-type]"); // получим массив HTML элементов
