// function convertToArray<Template>(value: Template): Template[] {
//   return [value];
// }
// const array = convertToArray(55);
// const stringArray = convertToArray("Hello");
// stringArray.at(0)?.toUpperCase();

// const arrObj = convertToArray({
//   name: "",
//   id: 2,
// });

// function findIndexOfArray<Template extends string | number | object>(
//   array: Template[],
//   value: Template
// ) {
//   return array.findIndex((item) => item === value);
// }
// const foundedIndex = findIndexOfArray([1, 2, 3, 4], 3);
// const foundedStringIndex = findIndexOfArray(
//   ["apple", "banana", "bag"],
//   "banana"
// );
// const foundedObjIndex = findIndexOfArray([{ id: 1 }, { id: 2 }, { id: 3 }], {
//   id: 1,
// });

// console.log(foundedIndex);

// function concatValuesToArray<T, K>(value1: T, value2: K): [T, K] {
//   return [value1, value2];
// }

// const result = concatValuesToArray(44, "dsads");
// const result2 = concatValuesToArray<string, number>("dsadsa", 33);

// type IBook = {
//   title: string;
//   desc: string;
// };

// type IMagazine = {
//   title?: string;
//   desc: string;
//   publisher?: string;
// };

// type IPayload<T> = {
//   status: number;
//   body: T;
// };

// const res = fetch("https://jsonplaceholder.com/posts")
//   .then((res) => res.json())
//   .then((res) => res) as Promise<IPayload<IBook>>;

// type isString<T> = T extends string ? "Yes" : "No";

// function showSomething<T>(value: Partial<{ name: string }>) {
//   return value;
// }
// readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];

type DeepReadonly<T> = {
  /*
  T = { DSADSA: SDSAD, DSADSA: DASDSA}
  function DeepReadonly(T) 
    for (let K in T) {
      if (typeof K === 'object') {
        DeepReadonly(T[K])
      } else {
        return T[K] 
      }
    }
  }*/
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// interface IBook {
//   title: string;
//   id: number;
//   children: {
//     title: string;
//     id: number;
//   };
// }

// type res = DeepReadonly<IBook>;
