// 4. Arrays Built-in methods
// Know how to copy array part
const arr = [1, 2, 3, 4, 5];
const part = arr.slice(2); // [3, 4, 5]

// Know how to flatten nested array
const arr2 = [1, 2, 3, [4, 5]];
const flattenArr = arr2.flat(); // [1, 2, 3, 4, 5]

// 5. Arrays Iterating, Sorting, Filtering
arr.forEach(el => console.log(el)); // 1, 2, 3, 4, 5

const modified = arr.map(el => el * 2); // [2, 4, 6, 8, 10]

const sum = arr.reduce((acc, curr) => acc + curr); // 15

// Be able to custom sorting for Array
arr.sort((a, b) => b - a); // [5, 4, 3, 2, 1]

// Be able to filter Array elements
const filtered = arr.filter(i => i > 3); // [5, 4]
