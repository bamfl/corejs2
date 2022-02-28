// 1. Advanced Expressions

// - Hoisting
hoistingFunc(); // hoisting

function hoistingFunc() {
  console.log('hoisting');
}

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// - Temporal dead zone - нельзя обращатсья к переменным неподверженным Hoisting выше по коду
console.log(b); // undefined
var b = 20;
console.log(b); // undefined

console.log(c); // ReferenceError: Cannot access 'c' before initialization
console.log(d); // ReferenceError: Cannot access 'd' before initialization

// end temporal zone for c
const c = 1;
// end temporal zone for d
let d = 2;

// function, var - функциональная область видимости
// const, let - блочная область видимости
// глобальная область видимости