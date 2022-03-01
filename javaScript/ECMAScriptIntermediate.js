// 8. ECMAScript Intermediate
// Function default parameters
function myFunction(x = 0, y = 2) {
  // function code
}

// ECMA script ES6 modules
// Экспорт функционала модуля
// export create;
// export default randomSquare;

// Импорт функционала в ваш скрипт
// import { create, createReportList } from './modules/canvas.js';
// import randomSquare from './modules/square.js';

// Know how to use spread operator for Function arguments
function showSpread(...rest) {
  console.dir(arguments);
  console.dir(rest);
  console.log(rest.reduce((a, b) => a + b));
}

const nums = [1, 2, 3, 4, 5];
showSpread(...nums);

// Be able to compare arguments and rest parameters
// rest - масиив с прототипом Array (есть map, sort, pop и т.д.)
// arguments - псевдомасиив без методов масиива

// Spread operator for Array
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()
console.log(arr2);

// Understand and able to use spread operator for Array concatenation Destructuring assignment
const arr3 = [0, 1, 2];
const arr4 = [3, 4, 5];
const arr5 = [...arr3, ...arr4];
console.log(arr5);

// Be able to discover destructuring assignment concept
let a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

let [c, d, ...rest2] = [1, 2, 3, 4, 5];
console.log(c); // 1
console.log(d); // 2
console.log(rest2); // [3, 4, 5]

// Understand variables and Function arguments destructuring assignment
function showSpread2(...rest) {
  console.dir(arguments);
  console.dir(rest);
  console.log(rest.reduce((a, b) => a + b));
}

const nums2 = [1, 2, 3, 4, 5];
showSpread2(...nums);

// String templates
const username = 'Dima';
const str = `Hello, ${username}`;
console.log(str);

// Know how for..of loop works (optional)
// Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2