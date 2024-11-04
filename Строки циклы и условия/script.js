// const sayHi = (name, age = 32) =>
//   `Привет ${name}, тебе ${age}, но ты все еще так молод мой дорогой друг!`;

// console.log(sayHi("Владимир", 47));

const maxSpeed = 60;
const carSpeed = 80;

if (carSpeed > maxSpeed) {
  console.log("Держите штраф, вы завышаете");
} else if (carSpeed === maxSpeed) {
  console.log("Все отлично езжайте");
} else {
  console.log("Держите штраф, вы занижаете");
}

const currentState = "yellow13312321321";

switch (currentState) {
  case "red":
    console.log("Машины стойте");
    break;
  case "green":
    console.log("Езжайте");
    break;
  default:
    console.log("Готовтесь!");
    break;
}

console.log("--------------------------------");
console.log("--------------------------------");
console.log("--------------------------------");

const products = ["Яблоки", "Кофе", "Булочки", "Кофе", "Кофе"];

const search = "яб";

for (let i = 0; i < products.length; i++) {
  if (products[i].toLowerCase().includes(search.toLowerCase()))
    console.log("Найденый элемент: " + products[i]);
}

let j = 0;

while (j < products.length) {
  console.log(products[j]);
  j++;
}

for (const product of products) {
  console.log(`Мы купили ${product}`);
}

const foundedProduct =
  products.find((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  ) ?? "Дефолтное значение";

products.forEach((product, index) => {
  if (index % 2 !== 0) {
    console.log(product + " Каждый второй");
  }
});

console.log(foundedProduct + " Я нашел");

// [] - именами
// prompt - найти пользователя
// находим и показываем его
// если его не находим
// создать prompt в котором мы вводим имя пользователя
// алерт в ктором говорится что пользователь с таким именем был создан!

const users = [];

users.push("Игорь");

// do {
//   console.log(products[j]);
//   j++;
// } while (j < products.length);
