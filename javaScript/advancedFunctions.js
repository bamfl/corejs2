// 9. Advanced Functions
// this scope
// this - ссылка на объект, в контексте которого выполняется функция
console.log(this); // window or undefined

// Reference Type & losing this
const obj = {
  name: 'John',
  surname: 'Smith',
  showThis() {
    return this; // obj
  },
  arrowThis: () => {
    return this; // у arrow function нет контекста, берется у родителя, window
  },
  loseThis() {
    return function() {
      return this; // undefined
    }
  },
};

console.log(obj.showThis());
console.log(obj.arrowThis());
console.log(obj.loseThis()());

// Understand difference between function and method
const user = {
  name: 'Alex',
  sayHi() {
    console.log(this.name);
  }
}

const user2 = {
  name: 'Phillip'
}

const name = 'Margot';

function sayHi() {
  console.log(this.name);
}

user.sayHi(); // Alex
user.sayHi.call(user2); // Phillip

sayHi.call(user); // Alex
sayHi.call(user2); // Phillip
window.sayHi();
sayHi();

// Understand how this works, realize this possible issues

// Manage this scope
// Be able to use call and apply Function built-in methods
function greet(name) {
  console.log(`Здорова, ${name}`);
}
greet.call(null, 'Женя');
greet.apply(null, ['Пёс']);
greet.bind(null, 'Отец')();