export {};

// EXAMPLE 1 - Type the reduce() method in TypeScript

const arr = [{ id: 1 }, { name: 'bobby hadz' }, { salary: 100 }];

type ReduceReturnType = {
  id?: number;
  name?: string;
  salary?: number;
};

const result = arr.reduce<ReduceReturnType>(
  (accumulator, current) => {
    return { ...accumulator, ...current };
  },
  {}, // 👈️ initial value
);

// const result: ReduceReturnType
console.log(result); // 👉️ {id: 1, name: 'bobby hadz', salary: 100}

console.log(result.id); // 👉️ 1
console.log(result.name); // 👉️ "bobby hadz"
console.log(result.salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 2 - Type the reduce() method using a type assertion

// const arr = [{ id: 1 }, { name: 'Bobby Hadz' }, { salary: 100 }];

// type ReduceReturnType = {
//   id: number; // 👈️ 👈️ 👈️ no longer optional
//   name: string;
//   salary: number;
// };

// const result = arr.reduce<ReduceReturnType>(
//   (accumulator, current) => {
//     return { ...accumulator, ...current };
//   },
//   {} as ReduceReturnType, // 👈️ 👈️ 👈️ Now using Type Assertion
// );

// // const result: ReduceReturnType
// console.log(result); // 👉️ {id: 1, name: 'Bobby Hadz', salary: 100}

// console.log(result.id); // 👉️ 1
// console.log(result.name); // 👉️ "Bobby Hadz"
// console.log(result.salary); // 👉️ 100

// ---------------------------------------------------

// // EXAMPLE 3 - TypeScript might be able to infer the type of `reduce()`

// const employees = [{ salary: 100 }, { salary: 200 }, { salary: 300 }];

// const result = employees.reduce((accumulator, current) => {
//   return accumulator + current.salary;
// }, 0);

// // const result: number
// console.log(result); // 👉️ 600

// ---------------------------------------------------

// // EXAMPLE 4 - Another example of typing the reduce() method in TypeScript

// const arr = ['a', 'b', 'c'];

// type ReduceReturnType = Record<string, string>;

// const result = arr.reduce<ReduceReturnType>(
//   (accumulator, current) => {
//     return { ...accumulator, [current]: current };
//   },
//   {}, // 👈️ initial value
// );

// // const result: ReduceReturnType
// console.log(result); // 👉️ {a: 'a', b: 'b', c: 'c'}
