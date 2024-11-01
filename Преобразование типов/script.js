// Типы переменных
// Number  - 1, 5.5
// String  - Oleg, Nikita
// Boolean - false - выключено, true - включено
// Number - Nan - not a number

// Object  - Cat { meaow(), eat() }

// Правила наименование переменных
// name_my_name - Rust \ PHP \ Python
// nameMyName   - Go Lang \ Dart \ Java - NameMyName

// Арифметические операторы
let a = 10;
let b = 5;

console.log(a + b); // Сложение
console.log(a - b); // Вычетание
console.log(a * b); // Умножение
console.log(a / b); // Деление
console.log(a % b); // Остаток от деления
console.log(a ** b); // Возведение в степень

let i = 1;

i = i + 1;
i += 1;
i++;

console.log("Переменная i =", i);

// Операторы сравнения
const x = 10;
const y = "10";

console.log(x == y); // true (не строгое равенство)
console.log(x === y); // false (строгое равенство, сравниваются и типы переменных)
console.log(x != y); // false (не строгое неравенство)
console.log(x !== y); // true (строгое неравенство)
console.log(x > y); // false
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // true

// Логические операторы
let c = true;
let d = false;

let str = "Hello";

console.log(c && d); // false (логическое И)
console.log(c || d); // true (логическое ИЛИ)
console.log(!c); // false (логическое И, инвертирование)
console.log(!!str); // true (форматирование строки в boolean)

// Операторы присваивания
let с1 = 10;
с1 = с1 + 5;
с1 += 5;
console.log(с1);

с1 *= 2;
console.log(с1);

// Операторы условного (тернарного) выражения
const applePrice = 120;

const money = 121;
const response =
  money >= applePrice
    ? "Берите ваши яблоки"
    : "К сожалению у вас не достаточно денег";

console.log(response);

// Неявное преобразование типов
let num = 5;
let str1 = "10";

const result = num + str1;
console.log(result);

// Явные преобразования типов
let strNum = "123";
let numFromStr = Number(strNum);
let numToInt = parseInt(strNum);

let strNum1 = "55";
let numResult = +"55";

let floatStr = "123.45";
let floatNum = parseFloat(floatStr);

let boolValue = Boolean(false);
console.log(boolValue); // true / false
console.log(!!"Hello World"); // true

// Преобразование типов при сравнении
let a2 = "5";
let b2 = 5;

console.log(a2 == b2); // true (потому что значение одинаковое)
console.log(a2 === b2); // false (хоть и значение одинаковое но типы разные)
