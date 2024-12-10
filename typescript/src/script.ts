// function hi(name: string): void {
//   console.log(`Hello, ${name}`);
// }

// const name: string = "Hello";
// const num: number = 22;
// const bool: boolean = false;
// const func: () => void = function () {};
// const arr: (string | number)[] = ["name", "admin", 22];
// const preEmpty: null = null;
// const empty: undefined = undefined;

// // ----------------------------
// const object: {} = {}; // interface | type
//

// const nameParts = fullName.split(" ");

// const lastLetter = nameParts[0].charAt(-nameParts.length);

// if (!nameParts[2].includes("ich")) {
//   return nameParts[2] + "ich";
// }

// if (arrOfPositive.includes(lastLetter)) {
//   console.log(nameParts.slice(nameParts[0].length - 1, 1));
// }

const arrOfPositive = ["I", "A"];

const fullName = "Zhruavkov Gregoriy Gregoriy";

function getShortName(fullName: string): string {
  const nameParts = fullName.split(" ");

  const firstPart = nameParts[0];
  let secondPart = nameParts[1].charAt(0);

  if (arrOfPositive.includes(secondPart)) {
    secondPart += nameParts[1].charAt(1);
  }

  let lastPart = nameParts[2].charAt(0);

  if (arrOfPositive.includes(lastPart)) {
    lastPart += nameParts[2].charAt(1);
  }

  return `${firstPart} ${secondPart}.${lastPart}.`;
}

console.log(getShortName(fullName));
