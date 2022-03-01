// 7. Functions Parameters / Arguments
// Know how to define Function parameters
function myFunction(x, y = 2) {
  // function code
}

// Know difference between parameters passing by value and by reference
// Строки, числа, логические значения передаются в функцию по значению. Объекты и массивы передаются по ссылке. Поменять св-во можно, но переприсвоить новое значание нельзя

// Know how to handle dynamic amount of Function parameters
function myLog(...rest) {
  console.log(rest);
  console.log(arguments);
}

myLog(10, 20, 30, 40, 50);
